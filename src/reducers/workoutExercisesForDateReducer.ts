import typeToReducer from 'type-to-reducer';
import TodaysWorkoutExercisesState from '../types/stateTypes/TodaysWorkoutExercisesState';
import { TodaysWorkoutExercisesAction, TodaysWorkoutExerciseActionsTypes } from '../actions/todaysWorkoutExercisesActions';
import { WorkoutExercisesForDateActionsTypes, WorkoutExercisesForDateAction } from '../actions/workoutExercisesForDateActions';
import WorkoutExercisesForDateState from '../types/stateTypes/WorkoutExercisesForDateState';

export const workoutExercisesForDateReducer = typeToReducer({
    [WorkoutExercisesForDateActionsTypes.FETCH_WORKOUT_EXERCISES_FOR_DATE]: {
        PENDING: (state: WorkoutExercisesForDateState, action: ReturnType<WorkoutExercisesForDateAction>): WorkoutExercisesForDateState => ({
            isFulfilled: false,
            loading: true,
            workoutExercisesForDate: [],
            isRejected: false
        }),
        REJECTED: (state: WorkoutExercisesForDateState, action: ReturnType<WorkoutExercisesForDateAction>): WorkoutExercisesForDateState => ({
            workoutExercisesForDate: [],
            loading: false,
            isFulfilled: false,
            isRejected: true,
        }),
        FULFILLED: (state: WorkoutExercisesForDateState, action: ReturnType<WorkoutExercisesForDateAction>): WorkoutExercisesForDateState => ({
            workoutExercisesForDate: action.payload,
            loading: false,
            isFulfilled: true,
            isRejected: false,
        }),
    }
}, {counterValue: 0});