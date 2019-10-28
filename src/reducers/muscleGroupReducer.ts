import typeToReducer from 'type-to-reducer';
import MuscleGroupsState from '../types/stateTypes/MuscleGroupsState';
import { MuscleGroupsAction, MuscleGroupActionsTypes } from '../actions/muscleGroupsActions';

export const muscleGroupReducer = typeToReducer({
    [MuscleGroupActionsTypes.FETCH_MUSCLE_GROUPS]: {
        PENDING: (state: MuscleGroupsState, action: ReturnType<MuscleGroupsAction>): MuscleGroupsState => ({
            isFulfilled: false,
            loading: true,
            muscleGroups: [],
            isRejected: false
        }),
        REJECTED: (state: MuscleGroupsState, action: ReturnType<MuscleGroupsAction>): MuscleGroupsState => ({
            muscleGroups: [],
            loading: false,
            isFulfilled: false,
            isRejected: true,
        }),
        FULFILLED: (state: MuscleGroupsState, action: ReturnType<MuscleGroupsAction>): MuscleGroupsState => ({
            muscleGroups: action.payload,
            loading: false,
            isFulfilled: true,
            isRejected: false,
        }),
    }
}, {counterValue: 0});