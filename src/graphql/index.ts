import gql from 'graphql-tag';
import { makeExecutableSchema } from 'graphql-tools';

import { Context } from './../app';

const RootQuery = gql`
  type RootQuery {

  }
`;
const Schema = gql`
  schema {
    query: RootQuery
  }
`;

const resolvers = {
  RootQuery: {

  },

};

export const schema = makeExecutableSchema({
  typeDefs: [
    Schema,
    RootQuery,
  ],
  resolvers,
});
