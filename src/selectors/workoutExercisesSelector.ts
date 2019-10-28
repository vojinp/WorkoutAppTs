import { createSelector } from 'reselect'
import StoreState from '../types/stateTypes/StoreState'
import { getExercises } from './exercisesSelector';

const getTodaysWorkoutExercises = (state: StoreState) => state.todaysWorkoutExercises.isFulfilled ? state.todaysWorkoutExercises.todaysWorkoutExercises : []
const getWorkoutExercisesForDate = (state: StoreState) => state.workoutExercisesForDate.isFulfilled ? state.workoutExercisesForDate.workoutExercisesForDate : []

export const getTodaysWorkoutExercisesWithNames = createSelector(
	[getExercises, getTodaysWorkoutExercises],
	(exercises, todaysWorkoutExercises) => {
		return filterList(todaysWorkoutExercises, exercises)
	}
)

export const getWorkoutExercisesWithNamesForDate = createSelector(
	[getExercises, getWorkoutExercisesForDate],
	(exercises, workoutExercisesForDate) => {
		return filterList(workoutExercisesForDate, exercises)
	}
)

const filterList = (list1, list2) => {
	console.log(list1)
	console.log(list2)
	return list1.map(item => {
		let filteredExercises = list2.filter(x => x.id === item.exerciseId)
		item.name = filteredExercises.length > 0 ? filteredExercises[0].name : null
		return item
	});
}