import winston from 'winston';
import moment from 'moment';
import 'moment-timezone';

class Logger {
  private logger: winston.Logger;

  constructor() {
    const customFormat = winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp(),
      winston.format.simple(),
      winston.format.printf(info => {
        const { level, message } = info;
        const ts = moment()
          .tz('America/Sao_Paulo')
          .format('YYYY/MM/DD HH:mm:ss.SSS');
        return `${ts} [${level}]: ${message}`;
      })
    );

    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console({
          format: customFormat,
        }),
      ],
    });
  }

  public error(message: any, ...args: any) {
    this.logger.error(message);

  }

  public warn(message: any, ...args: any) {
    this.logger.warn(message);

  }

  public info(message: any, ...args: any) {
    this.logger.info(message);

  }

  public debug(message: any, ...args: any) {
    this.logger.debug(message);

  }

}

  

export default new Logger();
