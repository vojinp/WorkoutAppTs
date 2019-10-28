import axios, {AxiosResponse} from 'axios';
import WorkoutExercise from "../models/WorkoutExercise";

class TodaysWorkoutExercisesService {
    public static getTodaysWorkoutExercises(): Promise<WorkoutExercise[]> {
        let workoutExercises = [
            {
                id: 0,
                exerciseId: 0,
                key: '0',
                date: new Date()
            },
            {
                id: 1,
                exerciseId: 1,
                key: '1',
                date: new Date()
            }
        ]

        return Promise.resolve(
            workoutExercises
        )
    }

    public static postWorkoutExercise(data: WorkoutExercise): Promise<WorkoutExercise> {
        data.id = 3;
        return Promise.resolve(data)
    }

}

export default TodaysWorkoutExercisesService;