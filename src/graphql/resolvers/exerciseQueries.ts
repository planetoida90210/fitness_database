import Exercise from '../../../models/exercise.js';
import { Types } from 'mongoose';

export const exerciseQueries = {
  async getExercise(_, { ID }) {
    if (!Types.ObjectId.isValid(ID)) {
      throw new Error('Invalid ID');
    }
    return await Exercise.findById(ID);
  },

  async getExercises(_, { input }) {
    let query = Exercise.find();

    if (input && input.filter) {
      const { filter } = input;

      if (filter.IDs) {
        query = query.where('_id').in(filter.IDs.filter(Types.ObjectId.isValid));
      }

        if (filter.difficultyLevel) {
            query = query.where('difficultyLevel').equals(filter.difficultyLevel);
        }

        if (filter.muscleGroup) {
            query = query.where('muscleGroup').in(filter.muscleGroup);
        }
    }

    if (input && typeof input.limit === 'number') {
      query = query.limit(input.limit);
    }

    return await query.exec();
  },
};

export const exerciseMutations = {
  async createExercise(_, { exerciseInput }) {
    const newExercise = new Exercise(exerciseInput);
    await newExercise.save();
    return newExercise;
  },

  async updateExercise(_, { ID, exerciseInput }) {
    if (!Types.ObjectId.isValid(ID)) {
      throw new Error('Invalid ID');
    }
    const updatedExercise = await Exercise.findByIdAndUpdate(ID, exerciseInput, { new: true });
    if (!updatedExercise) {
      throw new Error('Exercise not found');
    }
    return updatedExercise;
  },

  async deleteExercise(_, { ID }) {
    if (!Types.ObjectId.isValid(ID)) {
      throw new Error('Invalid ID');
    }
    const { deletedCount } = await Exercise.deleteOne({ _id: ID });
    if (deletedCount === 0) {
      throw new Error('Exercise not found');
    }
    return ID;
  },
};