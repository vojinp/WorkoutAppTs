import {combineReducers} from 'redux';
import { exerciseReducer } from './exerciseReducer';
import { setReducer } from './setReducer';
import { muscleGroupReducer } from './muscleGroupReducer';
import { todaysWorkoutExerciseReducer } from './todaysWorkoutExerciseReducer';
import { workoutExercisesForDateReducer } from './workoutExercisesForDateReducer';

const rootReducer = combineReducers({
    exercises: exerciseReducer,
    sets: setReducer,
    muscleGroups: muscleGroupReducer,
    todaysWorkoutExercises: todaysWorkoutExerciseReducer,
    workoutExercisesForDate: workoutExercisesForDateReducer
});

export default rootReducer;