import ExercisesService from "../services/ExercisesService";
import ExerciseSearchParams from "../types/searchTypes/ExerciseSearchParams";

export enum ExerciseActionsTypes {
    FETCH_EXERCISES = 'FETCH_EXERCISES'
}

export const fetchExercises = ( params = {} as  ExerciseSearchParams) => ({
    type: ExerciseActionsTypes.FETCH_EXERCISES,
    payload: ExercisesService.getExercises(params),
});


export type FetchExercisesAction = typeof fetchExercises;
export type ExercisesAction = FetchExercisesAction;