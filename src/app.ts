import * as express from 'express';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { schema } from './graphql';
import { createLoaders, Database, DataLoaders, db } from './db';

export const app = express();

export interface Context {
  loaders: DataLoaders;
  db: Database;
}

app.use(bodyParser.json());
app.use(
  '/graphql',
  graphqlExpress({
    schema,
    context: {
      loaders: createLoaders(db),
      db,
    } as Context,
  }),
);

app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
