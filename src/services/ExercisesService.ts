import axios, {AxiosResponse} from 'axios';
import Exercise from "../models/Exercise";
import ExerciseSearchParams from '../types/searchTypes/ExerciseSearchParams';

class ExercisesService {
    public static getExercises(params: ExerciseSearchParams): Promise<Exercise[]> {
        let exercises = [
            {
                id: 0,
                name: 'Biceps curl',
                key: '0',
                muscleGroupId: 1
            },
            {
                id: 1,
                name: 'Hammer curl',
                key: '1',
                muscleGroupId: 1
            },
            {
                id: 2,
                name: 'Dumbel row',
                key: '2',
                muscleGroupId: 2
            }
        ]

        if (params.searchText && params.searchText !== '') {
            exercises = exercises.filter(x => x.name.toLocaleLowerCase().indexOf(params.searchText.toLocaleLowerCase()) !== -1)
        }

        if (params.selectedGroupId && params.selectedGroupId !== 0) {
            exercises = exercises.filter(x => x.muscleGroupId === params.selectedGroupId)
        }

        return Promise.resolve(
            exercises
        )
    }

    public static postExercise(data: Exercise): Promise<number> {
        return Promise.resolve(3)
    }

}

export default ExercisesService;