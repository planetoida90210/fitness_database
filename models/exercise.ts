import { Schema, model } from 'mongoose';

interface IExercise  {
    id?: String;
    name: String;
    description: String;
    difficultyLevel: String;
    muscleGroup: String[];
    equipment: String[];
    videoUrl?: String;
    imageUrl?: String;
    tags?: String[];
    intensityLevel?: String;
    duration?: Number;
    caloriesBurned?: Number;
}

const ExerciseSchema = new Schema<IExercise>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    difficultyLevel: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    muscleGroup: { type: [String], required: true },
    equipment: { type: [String], required: true },
    videoUrl: { type: String },
    imageUrl: { type: String },
    tags: [{ type: String }],
    intensityLevel: { type: String, enum: ['low', 'medium', 'high'] },
    duration: { type: Number},
    caloriesBurned: { type: Number },
});

const Exercise = model<IExercise>('Exercise', ExerciseSchema, 'exercises-outdoor');

export default Exercise;
