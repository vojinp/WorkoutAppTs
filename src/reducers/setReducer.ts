import typeToReducer from 'type-to-reducer';

import SetsState from '../types/stateTypes/SetsState';
import { SetsAction, SetActionsTypes, PostSetAction } from '../actions/setsActions';
import Set from '../models/Set'

export const setReducer = typeToReducer({
    [SetActionsTypes.FETCH_SETS]: {
        PENDING: (state: SetsState, action: ReturnType<SetsAction>): SetsState => ({
            isFulfilled: false,
            loading: true,
            sets: [],
            isRejected: false
        }),
        REJECTED: (state: SetsState, action: ReturnType<SetsAction>): SetsState => ({
            sets: [],
            loading: false,
            isFulfilled: false,
            isRejected: true,
        }),
        FULFILLED: (state: SetsState, action: ReturnType<SetsAction>): SetsState => ({
            sets: action.payload,
            loading: false,
            isFulfilled: true,
            isRejected: false,
        }),
    },
    [SetActionsTypes.POST_SET]: {
        PENDING: (state: SetsState, action: ReturnType<SetsAction>): SetsState => ({
            isFulfilled: false,
            loading: true,
            sets: state.sets,
            isRejected: false
        }),
        REJECTED: (state: SetsState, action: ReturnType<SetsAction>): SetsState => ({
            sets: state.sets,
            loading: false,
            isFulfilled: false,
            isRejected: true,
        }),
        FULFILLED: (state: SetsState, action: {payload: Set}): SetsState => {
            return ({
                sets: [
                    ...state.sets  as Set[],
                    action.payload           
                ],
                loading: false,
                isFulfilled: true,
                isRejected: false,
            })
        },
    }
}, {counterValue: 0});