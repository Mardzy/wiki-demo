import { ApolloServer} from 'apollo-server';
import { schema } from './schema';
import { dataSources } from './data-source';

const server = new ApolloServer({ dataSources, schema });

server
  .listen()
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
