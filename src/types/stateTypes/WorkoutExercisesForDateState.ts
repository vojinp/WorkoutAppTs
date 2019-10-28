import WorkoutExercise from '../../models/WorkoutExercise';

export default interface WorkoutExercisesForDateState {
    workoutExercisesForDate?: WorkoutExercise[] | Promise<WorkoutExercise[]>;
    loading: boolean;
    isFulfilled: boolean;
    isRejected: boolean;
}