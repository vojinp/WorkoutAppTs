import axios, {AxiosResponse} from 'axios';
import WorkoutExercise from "../models/WorkoutExercise";
import WorkoutExerciseSearchParams from '../types/searchTypes/WorkoutExerciseSearchParams';

class WorkoutExercisesForDatesService {
    public static getWorkoutExercisesForDate(params: WorkoutExerciseSearchParams): Promise<WorkoutExercise[]> {
        console.log(params)
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

        if (params.date && params.date !== null)
            workoutExercises = workoutExercises.filter(x => { 
                let d1 = x.date.setHours(0,0,0,0)
                let d2 = params.date.setHours(0,0,0,0)   //toDate()
                return d1 === d2
            })

        return Promise.resolve(
            workoutExercises
        )
    }
}

export default WorkoutExercisesForDatesService;