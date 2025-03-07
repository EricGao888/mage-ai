from mage_ai.data_preparation.logging import LoggingConfig
from mage_ai.data_preparation.models.constants import LOGS_DIR
from mage_ai.data_preparation.models.file import File
from mage_ai.data_preparation.repo_manager import RepoConfig, get_repo_config
from mage_ai.shared.array import find
from typing import Callable, Dict, List
import asyncio
import io
import logging
import os

MAX_LOG_FILE_SIZE = 20 * 1024 * 1024


class LoggerManager:
    def __init__(
        self,
        repo_path: str = None,
        logs_dir: str = None,
        pipeline_uuid: str = None,
        block_uuid: str = None,
        partition: str = None,
        repo_config: RepoConfig = None,
        subpartition: str = None,
    ):
        self.repo_path = repo_path
        self.logs_dir = logs_dir
        self.pipeline_uuid = pipeline_uuid
        self.block_uuid = block_uuid
        self.partition = partition
        self.subpartition = subpartition

        self.repo_config = repo_config or get_repo_config()
        logging_config = self.repo_config.logging_config if self.repo_config else dict()
        self.logging_config = LoggingConfig.load(config=logging_config)

        logger_name_parts = [self.pipeline_uuid]
        if self.partition is not None:
            logger_name_parts.append(self.partition)
        if self.block_uuid is not None:
            logger_name_parts.append(self.block_uuid)
        logger_name = '/'.join(logger_name_parts)

        self.logger = logging.getLogger(logger_name)

        self.log_level = logging.getLevelName(self.logging_config.level)
        self.logger.setLevel(self.log_level)

        self.formatter = logging.Formatter(
            '%(asctime)s %(message)s',
            '%Y-%m-%dT%H:%M:%S',
        )
        self.stream = None
        if not self.logger.handlers:
            if self.logging_config.destination_config:
                handler = self.create_stream_handler()
            else:
                log_filepath = self.get_log_filepath(create_dir=True)
                handler = logging.handlers.RotatingFileHandler(
                    log_filepath,
                    backupCount=10,
                    maxBytes=MAX_LOG_FILE_SIZE,
                )

            handler.setLevel(self.log_level)
            handler.setFormatter(self.formatter)
            self.logger.addHandler(handler)
        else:
            if self.logging_config.destination_config:
                stream_handler = \
                    find(lambda hr: hr.__class__ == logging.StreamHandler, self.logger.handlers)
                if stream_handler:
                    self.stream = stream_handler.stream

    def create_stream_handler(self):
        self.stream = io.StringIO()
        return logging.StreamHandler(self.stream)

    def output_logs_to_destination(self):
        pass

    def create_log_filepath_dir(self, path):
        if not os.path.exists(path):
            os.makedirs(path)

    def get_log_filepath_prefix(self):
        logs_dir = self.logs_dir or self.repo_config.variables_dir

        return os.path.join(
            logs_dir,
            'pipelines',
            self.pipeline_uuid,
            LOGS_DIR,
            self.partition or '',
            self.subpartition or '',
        )

    def get_log_filepath(self, create_dir: bool = False):
        if self.pipeline_uuid is None:
            raise Exception('Please specify a pipeline uuid in your logger.')

        prefix = self.get_log_filepath_prefix()

        if create_dir:
            self.create_log_filepath_dir(prefix)

        if self.block_uuid is None:
            log_filepath = os.path.join(prefix, 'pipeline.log')
        else:
            log_filepath = os.path.join(prefix, f'{self.block_uuid}.log')
        return log_filepath

    def get_logs(self):
        file = File.from_path(self.get_log_filepath())
        return file.to_dict(include_content=True)

    async def get_logs_async(self):
        file = File.from_path(self.get_log_filepath())
        return await file.to_dict_async(include_content=True)

    async def get_logs_in_subpartition_async(self, filter_func: Callable = None) -> List[Dict]:
        files = []

        base_path = self.get_log_filepath_prefix()
        if os.path.exists(base_path):
            for filename in os.listdir(base_path):
                full_path = f'{base_path}/{filename}'
                if not os.path.isfile(full_path):
                    continue

                file = File.from_path(full_path)
                should_add = True

                if filter_func:
                    should_add = filter_func(file)

                if should_add:
                    files.append(file)

        return await asyncio.gather(
            *[file.to_dict_async(include_content=True) for file in files]
        )
