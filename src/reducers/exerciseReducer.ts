import typeToReducer from 'type-to-reducer';
import ExercisesState from '../types/stateTypes/ExercisesState';
import { ExercisesAction, ExerciseActionsTypes } from '../actions/exercisesActions';

export const exerciseReducer = typeToReducer({
    [ExerciseActionsTypes.FETCH_EXERCISES]: {
        PENDING: (state: ExercisesState, action: ReturnType<ExercisesAction>): ExercisesState => ({
            isFulfilled: false,
            loading: true,
            exercises: [],
            isRejected: false
        }),
        REJECTED: (state: ExercisesState, action: ReturnType<ExercisesAction>): ExercisesState => ({
            exercises: [],
            loading: false,
            isFulfilled: false,
            isRejected: true,
        }),
        FULFILLED: (state: ExercisesState, action: ReturnType<ExercisesAction>): ExercisesState => ({
            exercises: action.payload,
            loading: false,
            isFulfilled: true,
            isRejected: false,
        }),
    }
}, {counterValue: 0});