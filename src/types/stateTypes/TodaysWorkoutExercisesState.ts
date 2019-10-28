import WorkoutExercise from '../../models/WorkoutExercise';

export default interface TodaysWorkoutExercisesState {
    todaysWorkoutExercises?: WorkoutExercise[] | Promise<WorkoutExercise[]>;
    loading: boolean;
    isFulfilled: boolean;
    isRejected: boolean;
}