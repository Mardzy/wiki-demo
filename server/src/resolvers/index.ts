import { IResolvers } from 'apollo-server';
import { wikiResponse} from './wiki-response';

const rootResolver: IResolvers = {
  Query: {

  }
}

export { rootResolver, wikiResponse }
