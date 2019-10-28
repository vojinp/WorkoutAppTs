import axios, {AxiosResponse} from 'axios';
import Set from "../models/Set";
import SetSearchParams from '../types/searchTypes/SetSearchParams';

class SetsService {
    public static getSets(params: SetSearchParams): Promise<Set[]> {
        const allSets = [
            {
                id: 0,
                weight: 12,
                reps: 10,
                key: '0',
                exerciseId: 0
            },
            {
                id: 1,
                weight: 12,
                reps: 10,
                key: '1',
                exerciseId: 0
            },
            {
                id: 2,
                weight: 12,
                reps: 8,
                key: '2',
                exerciseId: 1
            },
        ]
        return Promise.resolve(
            allSets.filter(x => x.exerciseId === params.exerciseId)
        )
    }

    public static postSet(data: Set): Promise<Set> {
        data.id = 3;
        return Promise.resolve(data)
    }

}

export default SetsService;