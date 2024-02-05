const exerciseTypes = `#graphql

# Typ reprezentujący ćwiczenie / A type representing an exercise
type Exercise {
  id: ID!
  name: String!
  description: String!
  difficultyLevel: String!
  muscleGroup: [String!]!
  equipment: [String!]!
  videoUrl: String
  imageUrl: String
  tags: [String!]
  intensityLevel: String
  duration: Int
  caloriesBurned: Int
}

# Typ wejściowy do filtrowania ćwiczeń / Input type for filtering exercises
input ExerciseFilter {
  ids: [ID!]
  difficultyLevel: String
  muscleGroup: [String!]
  equipment: [String!]
  tags: [String!]
  intensityLevel: String
  minDuration: Int
  maxDuration: Int
  minCaloriesBurned: Int
  maxCaloriesBurned: Int
}

# Typ wejściowy zawierający filtry oraz limit dla ćwiczeń / Input type containing filters and limit for exercises
input ExerciseFiltersInput {
  filter: ExerciseFilter
  limit: Int
}

# Typ wejściowy dla tworzenia i aktualizacji ćwiczeń / Input type for creating and updating exercises
input ExerciseInput {
  name: String!
  description: String!
  difficultyLevel: String!
  muscleGroup: [String!]!
  equipment: [String!]!
  videoUrl: String
  imageUrl: String
  tags: [String!]
  intensityLevel: String
  duration: Int
  caloriesBurned: Int
}

# Zapytania / Queries
type Query {
  getExercise(id: ID!): Exercise
  getExercises(input: ExerciseFiltersInput): [Exercise]!
}

# Mutacje / Mutations
type Mutation {
  createExercise(exerciseInput: ExerciseInput): Exercise!
  updateExercise(id: ID!, exerciseInput: ExerciseInput): Exercise!
  deleteExercise(id: ID!): ID!
}
`;

export default exerciseTypes;