import StoreState from '../types/stateTypes/StoreState'

export const getSets = (state: StoreState) => state.sets.isFulfilled ? state.sets.sets : null
