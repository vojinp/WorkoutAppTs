import TodaysWorkoutExercisesService from "../services/TodaysWorkoutExercisesService";
import WorkoutExercise from "../models/WorkoutExercise";

export enum TodaysWorkoutExerciseActionsTypes {
    FETCH_TODAYS_WORKOUT_EXERCISES = 'FETCH_TODAYS_WORKOUT_EXERCISES',
    POST_TODAYS_WORKOUT_EXERCISES = 'POST_TODAYS_WORKOUT_EXERCISES'
}

export const fetchTodaysWorkoutExercises = () => ({
    type: TodaysWorkoutExerciseActionsTypes.FETCH_TODAYS_WORKOUT_EXERCISES,
    payload: TodaysWorkoutExercisesService.getTodaysWorkoutExercises(),
});

export const postTodaysWorkoutExercise = (data: WorkoutExercise) =>  ({
    type: TodaysWorkoutExerciseActionsTypes.POST_TODAYS_WORKOUT_EXERCISES,
    payload: TodaysWorkoutExercisesService.postWorkoutExercise(data)
});

export type FetchTodaysWorkoutExercisesAction = typeof fetchTodaysWorkoutExercises;
export type TodaysWorkoutExercisesAction = FetchTodaysWorkoutExercisesAction;
export type PostTodaysWorkoutExercisesAction = typeof postTodaysWorkoutExercise;
