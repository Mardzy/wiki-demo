import * as _ from 'lodash';
import { IResolvers, makeExecutableSchema } from 'apollo-server';

import { Category, Query, Section, WikiResponse } from '../type-definitions';
import { resolvers as baseResolver, wikiResponse } from '../resolvers'

const resolvers = _.merge(baseResolver, wikiResponse);
const typeDefs = [Category, Query, Section, WikiResponse];

export const index = makeExecutableSchema({
  resolvers,
  typeDefs
})
