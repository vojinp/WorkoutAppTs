import MuscleGroup from '../../models/MuscleGroup';

export default interface MuscleGroupsState {
    muscleGroups?: MuscleGroup[] | Promise<MuscleGroup[]>;
    loading: boolean;
    isFulfilled: boolean;
    isRejected: boolean;
}