import 'dotenv/config';

import { ApolloServer } from "@apollo/server";
import { connect } from 'mongoose';
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from './graphql/resolvers';
import exerciseTypes from './graphql/types/exerciseTypes';

import Exercise from '../models/exercise';


const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined in .env file');
    process.exit(1);
}

connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


const server = new ApolloServer({
  typeDefs: [exerciseTypes], // Add other types here if needed switch for index.ts structure
  resolvers, 
});


startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});