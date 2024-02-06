import { exerciseQueries } from './exerciseQueries.js';
import { exerciseMutations } from './exerciseMutations.js';
export const resolvers = {
    Query: {
        ...exerciseQueries,
    },
    Mutation: {
        ...exerciseMutations,
    },
};
