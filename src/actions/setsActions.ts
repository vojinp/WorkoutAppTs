import SetsService from "../services/SetsService";
import SetSearchParams from "../types/searchTypes/SetSearchParams";
import Set from '../models/Set';

export enum SetActionsTypes {
    FETCH_SETS = 'FETCH_SETS',
    POST_SET = 'POST_SET'
}

export const fetchSets = (params = {} as SetSearchParams) => {
    return ({
        type: SetActionsTypes.FETCH_SETS,
        payload: SetsService.getSets(params)
    });
}

export const postSet = (data : Set) =>  {
    return {
        type: SetActionsTypes.POST_SET,
        payload: SetsService.postSet(data)
    }
}

export type FetchSetsAction = typeof fetchSets;
export type PostSetAction = typeof postSet;
export type SetsAction = FetchSetsAction;