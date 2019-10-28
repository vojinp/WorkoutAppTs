import MuscleGroupsService from "../services/MuscleGroupsService";

export enum MuscleGroupActionsTypes {
    FETCH_MUSCLE_GROUPS = 'FETCH_MUSCLE_GROUPS'
}

export const fetchMuscleGroups = () => ({
    type: MuscleGroupActionsTypes.FETCH_MUSCLE_GROUPS,
    payload: MuscleGroupsService.getMuscleGroups(),
});


export type FetchMuscleGroupsAction = typeof fetchMuscleGroups;
export type MuscleGroupsAction = FetchMuscleGroupsAction;