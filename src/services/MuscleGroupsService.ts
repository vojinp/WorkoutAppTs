import axios, {AxiosResponse} from 'axios';
import MuscleGroup from "../models/MuscleGroup";

class MuscleGroupsService {
    public static getMuscleGroups(): Promise<MuscleGroup[]> {
        return Promise.resolve(
            [
                {
                    name: 'All',
                    id: 0,
                    key: '0'
                },
                {
                    name: 'Biceps',
                    id: 1,
                    key: '1'
                },
                {
                    name: 'Back',
                    id: 2,
                    key: '2'
                }
            ]
        )
    }

}

export default MuscleGroupsService;