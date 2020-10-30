import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';
import swaggerUI from 'swagger-ui-express';

import { RegisterRoutes } from '../tsoa/routes';
import { errorHandler } from './middleware';

class App {
  express: Express;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.buildDocs();
    this.useErrorHandler();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  private buildDocs() {
    this.express.use(
      '/docs',
      swaggerUI.serve,
      async (req: Request, res: Response) => {
        return res.send(
          swaggerUI.generateHTML(await import('../tsoa/swagger.json'))
        );
      }
    );
  }

  private useErrorHandler() {
    this.express.use(errorHandler);
  }

  private routes(): void {
    RegisterRoutes(this.express);
  }
}

const app = new App();

const server = app.express;

export default server;
