import { Types } from 'mongoose'; 
import Exercise from '../../../models/exercise';
import { ExerciseFiltersInput } from '../types/exerciseFiltersInput';

export const exerciseQueries = {
  // Pobierz pojedyncze ćwiczenie po ID / Get a single exercise by ID
  async getExercise(_, { id }) {
    // Sprawdź, czy ID jest prawidłowym identyfikatorem MongoDB / Check if the ID is a valid MongoDB identifier
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID');
    }
    return await Exercise.findById(id);
  },

  // Pobierz listę ćwiczeń z opcjonalnym filtrowaniem / Get a list of exercises with optional filtering
  async getExercises(_, { input = {} as ExerciseFiltersInput }) {
    const { filter, limit } = input;

    let query = Exercise.find();

    if (filter) {
      // Filtrowanie po ID (jeśli podano) / Filtering by ID (if provided)
      if (filter.ids) {
        query.where('_id').in(filter.ids.filter(Types.ObjectId.isValid));
      }
      // Filtrowanie po poziomie trudności / Difficulty level filtering
      if (filter.difficultyLevel) {
        query.where('difficultyLevel').equals(filter.difficultyLevel);
      }
      // TODO: Add other filters
    }

    if (typeof limit === 'number') {
      query.limit(limit);
    }

    return await query.exec();
  },
};