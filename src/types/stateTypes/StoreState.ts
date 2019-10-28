import ExercisesState from "./ExercisesState";
import SetsState from "./SetsState";
import MuscleGroupsState from "./MuscleGroupsState";
import TodaysWorkoutExercisesState from "./TodaysWorkoutExercisesState";
import WorkoutExercisesForDateState from "./WorkoutExercisesForDateState";

export default interface StoreState {
    exercises: ExercisesState,
    sets: SetsState,
    muscleGroups: MuscleGroupsState,
    todaysWorkoutExercises: TodaysWorkoutExercisesState,
    workoutExercisesForDate: WorkoutExercisesForDateState
}