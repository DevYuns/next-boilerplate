import {ApolloServer} from '@apollo/server';
import type {Context} from './context';
import {applyMiddleware} from 'graphql-middleware';
import {schema} from './schema';

export const schemaWithMiddleware =
  process.env.NODE_ENV === 'development' ? schema : applyMiddleware(schema);

const apolloServer = new ApolloServer<Context>({
  schema: schemaWithMiddleware,
  introspection: process.env.NODE_ENV !== 'production',
});

// https://github.com/apollo-server-integrations/apollo-server-integration-next
apolloServer.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

export {apolloServer};
