import * as React from 'react';
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import { ScrollView, Button, View, Text } from 'react-native';

import { getTodaysWorkoutExercisesWithNames } from '../selectors/workoutExercisesSelector';
import StoreState from '../types/stateTypes/StoreState';
import WorkoutExerciseWithName from '../models/WorkoutExerciseWithName';
import { FetchTodaysWorkoutExercisesAction } from '../actions/todaysWorkoutExercisesActions';
import ExerciseList from '../components/ExerciseList';
import { fetchTodaysWorkoutExercises } from '../actions/todaysWorkoutExercisesActions';
import { fetchExercises, FetchExercisesAction } from '../actions/exercisesActions';
import NavigatorService from '../services/NavigatorService';

interface Props {
    fetchTodaysWorkoutExercises: FetchTodaysWorkoutExercisesAction,
    fetchExercises: FetchExercisesAction,
    workoutExercises: WorkoutExerciseWithName[],
}

class WorkoutScreen extends React.Component<Props> {
    componentDidMount() {
        const { fetchExercises, fetchTodaysWorkoutExercises} = this.props;

        fetchExercises()
        fetchTodaysWorkoutExercises();
    }

    render() {
        const { workoutExercises } = this.props;
        let workoutExercisesDispay = [...workoutExercises];
        (workoutExercisesDispay as any).forEach(x => x.key = x.id + '')

        return (
            <ScrollView>
                { workoutExercises ? 
                    <View>
                        <ExerciseList 
                            exercises={ workoutExercisesDispay }
                        />
                        <Button
                            onPress={() => NavigatorService.navigate('AddExercise', {})}
                            title="Add exercise"
                        />
                    </View> :
                    <Text> Loading... </Text>            
                }
            </ScrollView>
        );
    }
}

const mapState = (state: StoreState) => ({
    workoutExercises: getTodaysWorkoutExercisesWithNames(state)
});

const mapDispatch = (dispatch: Dispatch) => bindActionCreators({
        fetchTodaysWorkoutExercises,
        fetchExercises
    },
    dispatch
);

export default connect(mapState, mapDispatch)(WorkoutScreen)