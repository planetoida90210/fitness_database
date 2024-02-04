import 'dotenv/config';

import { ApolloServer } from "@apollo/server";
import { connect } from 'mongoose';
import { startStandaloneServer } from '@apollo/server/standalone'


import Exercise from '../models/exercise';
import exerciseTypes from './graphql/types/exerciseTypes';

const MONGODB_URI = process.env.MONGODB_URI

const typeDefs = exerciseTypes;

if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined in .env file');
    process.exit(1);
}

connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

