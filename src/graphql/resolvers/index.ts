import { exerciseQueries } from './exerciseQueries';
import { exerciseMutations } from './exerciseMutations';

export const resolvers = {
  Query: {
    ...exerciseQueries,
  },
  Mutation: {
    ...exerciseMutations,
  },
};