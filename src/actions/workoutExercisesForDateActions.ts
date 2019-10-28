import WorkoutExercisesForDateservice from "../services/WorkoutExercisesForDateService";
import WorkoutExerciseForDateSearchParams from '../types/searchTypes/WorkoutExerciseSearchParams';

export enum WorkoutExercisesForDateActionsTypes {
    FETCH_WORKOUT_EXERCISES_FOR_DATE = 'FETCH_WORKOUT_EXERCISES_FOR_DATE'
}

export const fetchWorkoutExercisesForDate = (params = {} as WorkoutExerciseForDateSearchParams) => ({
    type: WorkoutExercisesForDateActionsTypes.FETCH_WORKOUT_EXERCISES_FOR_DATE,
    payload: WorkoutExercisesForDateservice.getWorkoutExercisesForDate(params),
});


export type FetchWorkoutExercisesForDateAction = typeof fetchWorkoutExercisesForDate;
export type WorkoutExercisesForDateAction = FetchWorkoutExercisesForDateAction;