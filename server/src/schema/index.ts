import { makeExecutableSchema } from 'apollo-server';

import { Category, Query, Section, WikiResponse } from '../types';
import { wikiResponse as resolvers } from '../resolvers'

const typeDefs = [Query, Category, Section, WikiResponse];

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs
})
