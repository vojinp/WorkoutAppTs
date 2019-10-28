import Exercise from '../../models/Exercise';

export default interface ExercisesState {
    exercises?: Exercise[] | Promise<Exercise[]>;
    loading: boolean;
    isFulfilled: boolean;
    isRejected: boolean;
}