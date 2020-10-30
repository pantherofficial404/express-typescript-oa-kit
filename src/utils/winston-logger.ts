import { createLogger, transports } from 'winston';

const defaultLevel = process.env.LOG_LEVEL || 'info';

const options = {
  exitOnError: false,
  level: defaultLevel
};

const logger = createLogger(options);

if (process.env.NODE_ENV === 'development') {
  logger.add(new transports.Console({
    level: 'debug'
  }));
}

export default logger
;
