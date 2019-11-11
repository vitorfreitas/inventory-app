import { createLogger, format, transports } from 'winston'

import config from '../../config/'

const { combine, timestamp, json, printf } = format

const customFormat = printf(({ level, message, timestamp }) => {
  const date = new Date(timestamp).toString()

  return `LOGGER ${level.toUpperCase()} - ${message} at ${date}`
})

const LOG_BASE_PATH: string = './logs'
const LOG_FILES_PATH = {
  error: `${LOG_BASE_PATH}/error.log`,
  combined: `${LOG_BASE_PATH}/combined.log`
}

const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  transports: [
    new transports.File({ filename: LOG_FILES_PATH.error, level: 'error' }),
    new transports.File({ filename: LOG_FILES_PATH.combined })
  ]
})

if (config.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: customFormat
    })
  )
}

export default logger
