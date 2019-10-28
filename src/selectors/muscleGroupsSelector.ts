import StoreState from '../types/stateTypes/StoreState'

export const getMuscleGroups = (state: StoreState) => state.muscleGroups.isFulfilled ? state.muscleGroups.muscleGroups : null
