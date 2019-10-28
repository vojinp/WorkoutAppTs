import typeToReducer from 'type-to-reducer';
import TodaysWorkoutExercisesState from '../types/stateTypes/TodaysWorkoutExercisesState';
import { TodaysWorkoutExercisesAction, TodaysWorkoutExerciseActionsTypes } from '../actions/todaysWorkoutExercisesActions';
import WorkoutExercise from '../models/WorkoutExercise';

export const todaysWorkoutExerciseReducer = typeToReducer({
    [TodaysWorkoutExerciseActionsTypes.FETCH_TODAYS_WORKOUT_EXERCISES]: {
        PENDING: (state: TodaysWorkoutExercisesState, action: ReturnType<TodaysWorkoutExercisesAction>): TodaysWorkoutExercisesState => ({
            isFulfilled: false,
            loading: true,
            todaysWorkoutExercises: [],
            isRejected: false
        }),
        REJECTED: (state: TodaysWorkoutExercisesState, action: ReturnType<TodaysWorkoutExercisesAction>): TodaysWorkoutExercisesState => ({
            todaysWorkoutExercises: [],
            loading: false,
            isFulfilled: false,
            isRejected: true,
        }),
        FULFILLED: (state: TodaysWorkoutExercisesState, action: ReturnType<TodaysWorkoutExercisesAction>): TodaysWorkoutExercisesState => ({
            todaysWorkoutExercises: action.payload,
            loading: false,
            isFulfilled: true,
            isRejected: false,
        }),
    },
    [TodaysWorkoutExerciseActionsTypes.POST_TODAYS_WORKOUT_EXERCISES]: {
        PENDING: (state: TodaysWorkoutExercisesState, action: ReturnType<TodaysWorkoutExercisesAction>): TodaysWorkoutExercisesState => ({
            isFulfilled: false,
            loading: true,
            todaysWorkoutExercises: state.todaysWorkoutExercises,
            isRejected: false
        }),
        REJECTED: (state: TodaysWorkoutExercisesState, action: ReturnType<TodaysWorkoutExercisesAction>): TodaysWorkoutExercisesState => ({
            todaysWorkoutExercises: state.todaysWorkoutExercises,
            loading: false,
            isFulfilled: false,
            isRejected: true,
        }),
        FULFILLED: (state: TodaysWorkoutExercisesState, action: {payload: WorkoutExercise}) : TodaysWorkoutExercisesState => ({
            todaysWorkoutExercises: [
                ...state.todaysWorkoutExercises  as WorkoutExercise[],
                action.payload           
            ],
            loading: false,
            isFulfilled: true,
            isRejected: false,
        }),
    }
}, {counterValue: 0});