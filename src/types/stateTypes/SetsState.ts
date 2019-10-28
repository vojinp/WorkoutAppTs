import Set from '../../models/Set';

export default interface SetsState {
    sets?: Set[] | Promise<Set[]>;
    loading: boolean;
    isFulfilled: boolean;
    isRejected: boolean;
}