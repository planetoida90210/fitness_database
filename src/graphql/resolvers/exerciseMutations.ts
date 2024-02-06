import { Types } from 'mongoose';
import Exercise from '../../../models/exercise.js';

export const exerciseMutations = {
  // Stworzenie nowego ćwiczenia / Create a new exercise
  async createExercise(_, { exerciseInput }) {
    // Tworzenie i zapisywanie nowego ćwiczenia w bazie danych / Creating and saving a new exercise in the database
    const newExercise = new Exercise(exerciseInput);
    await newExercise.save();
    return newExercise; // Zwraca stworzone ćwiczenie / Returns the created exercise
  },

  // Aktualizacja istniejącego ćwiczenia / Update an existing exercise
  async updateExercise(_, { id, exerciseInput }) {
    // Sprawdzanie, czy ID jest prawidłowym identyfikatorem MongoDB / Check if the ID is a valid MongoDB identifier
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID');
    }
    // Znajdowanie i aktualizacja ćwiczenia, opcja { new: true } zwraca zaktualizowany dokument / Find and update the exercise, the { new: true } option returns the updated document
    const updatedExercise = await Exercise.findByIdAndUpdate(id, exerciseInput, { new: true });
    if (!updatedExercise) {
      throw new Error('Exercise not found');
    }
    return updatedExercise; // Zwraca zaktualizowane ćwiczenie / Returns the updated exercise
  },

  // Usuwanie ćwiczenia
  async deleteExercise(_, { id }) {
    // Sprawdzanie, czy ID jest prawidłowym identyfikatorem MongoDB / Check if the ID is a valid MongoDB identifier
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid ID');
    }
    // Usuwanie ćwiczenia i sprawdzanie, czy operacja się powiodła / Delete the exercise and check if the operation was successful
    const { deletedCount } = await Exercise.deleteOne({ _id: id });
    if (deletedCount === 0) {
      throw new Error('Exercise not found');
    }
    return id; // Zwraca ID usuniętego ćwiczenia / Returns the ID of the deleted exercise
  },
};