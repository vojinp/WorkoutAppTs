import StoreState from '../types/stateTypes/StoreState'

export const getExercises = (state: StoreState) => state.exercises.isFulfilled ? state.exercises.exercises : []
