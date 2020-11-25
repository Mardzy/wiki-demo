import { ApolloServer} from 'apollo-server';
import { index } from './schema';
import { dataSources } from './data-sources/wikipedia-API';

const server = new ApolloServer({ dataSources, schema: index });

server
  .listen()
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`));
