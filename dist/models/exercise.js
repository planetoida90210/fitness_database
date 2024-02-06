import { Schema, model } from 'mongoose';
const ExerciseSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    difficultyLevel: { type: String, required: true, enum: ['beginner', 'intermediate', 'advanced'] },
    muscleGroup: { type: [String], required: true },
    equipment: { type: [String], required: true },
    videoUrl: { type: String },
    imageUrl: { type: String },
    tags: [{ type: String }],
    intensityLevel: { type: String, enum: ['low', 'medium', 'high'] },
    duration: { type: Number },
    caloriesBurned: { type: Number },
});
const Exercise = model('Exercise', ExerciseSchema, 'exercises-outdoor');
export default Exercise;
