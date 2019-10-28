import * as React from 'react';
import { StyleSheet, Text, ScrollView, FlatList, Button, TextInput, Picker } from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators, Dispatch} from "redux";

import StoreState from '../types/stateTypes/StoreState';
import { fetchWorkoutExercisesForDate, FetchWorkoutExercisesForDateAction } from '../actions/workoutExercisesForDateActions';
import { fetchMuscleGroups, FetchMuscleGroupsAction } from '../actions/muscleGroupsActions';
import { fetchExercises, FetchExercisesAction } from '../actions/exercisesActions';
import ExerciseList from '../components/ExerciseList';
import { getWorkoutExercisesWithNamesForDate } from  '../selectors/workoutExercisesSelector';
import WorkoutExerciseWithName from '../models/WorkoutExerciseWithName';
import MuscleGroup from '../models/MuscleGroup';
import { getMuscleGroups } from '../selectors/muscleGroupsSelector';

interface Props {
    fetchWorkoutExercisesForDate: FetchWorkoutExercisesForDateAction,
    fetchExercises: FetchExercisesAction,
    workoutExercises: WorkoutExerciseWithName[],
    navigation: any
}

class ExerciseListScreen extends React.Component<Props> {
    state = {
        date: null,
    }
    
    componentDidMount() {
        const { fetchExercises, fetchWorkoutExercisesForDate, navigation } = this.props
        const date = navigation.getParam('date')
        fetchWorkoutExercisesForDate({date : date.toDate()})
        fetchExercises()

        this.setState({
            date
		})
    }

    render() {
        const { workoutExercises } = this.props

        return (
            <ScrollView>
                { workoutExercises ? <ExerciseList 
                    exercises={ workoutExercises }
                /> : <Text> Loading... </Text> }
            </ScrollView>
        );
    }
}

const mapState = (state: StoreState) => ({
    workoutExercises: getWorkoutExercisesWithNamesForDate(state),
});

const mapDispatch = (dispatch: Dispatch) => bindActionCreators({
        fetchWorkoutExercisesForDate,
        fetchExercises
    },
    dispatch
);

export default connect(mapState, mapDispatch)(ExerciseListScreen)