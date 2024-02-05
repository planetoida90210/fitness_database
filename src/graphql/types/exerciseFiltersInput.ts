export interface ExerciseFiltersInput {
    filter?: {
      ids?: string[];
      difficultyLevel?: string;
      muscleGroup?: string[];
      equipment?: string[];
      tags?: string[];
      intensityLevel?: string;
      minDuration?: number;
      maxDuration?: number;
      minCaloriesBurned?: number;
      maxCaloriesBurned?: number;
    };
    limit?: number;
  }