import * as React from 'react';
import { ScrollView, TextInput, Button, View, Text } from 'react-native';
import { connect } from 'react-redux'
import {bindActionCreators, Dispatch} from "redux";

import MuscleGroupPicker from '../components/MuscleGroupPicker';
import AddExerciseList from '../components/AddExerciseList';
import StoreState from '../types/stateTypes/StoreState';
import { getExercises } from '../selectors/exercisesSelector';
import { getMuscleGroups } from '../selectors/muscleGroupsSelector';
import { fetchExercises, FetchExercisesAction } from '../actions/exercisesActions';
import { fetchMuscleGroups, FetchMuscleGroupsAction } from '../actions/muscleGroupsActions';
import { postTodaysWorkoutExercise, PostTodaysWorkoutExercisesAction } from '../actions/todaysWorkoutExercisesActions';
import MuscleGroup from '../models/MuscleGroup';
import Exercise from '../models/Exercise';

interface Props {
    fetchMuscleGroups: FetchMuscleGroupsAction,
    fetchExercises: FetchExercisesAction,
    postTodaysWorkoutExercise: PostTodaysWorkoutExercisesAction,
    navigation: any,
    muscleGroups: MuscleGroup[],
    exercises: Exercise[]
}

class AddTodaysWorkoutExerciseScreen extends React.Component<Props> {
    state = {
        selectedGroupId: null,
        selectedExerciseId: null,
        searchText: '',
    }

    componentDidMount() {
        const { selectedGroupId, searchText } = this.state
        const { fetchExercises, fetchMuscleGroups} = this.props

        fetchExercises({ selectedGroupId, searchText })
        fetchMuscleGroups()
    }

    selectItem = (itemId) => {
        let selectedExerciseId = itemId
        this.setState({
            selectedExerciseId
        })
    }

    addWorkoutExercise = () => {
        const { postTodaysWorkoutExercise, navigation} = this.props

        postTodaysWorkoutExercise({
            exerciseId: this.state.selectedExerciseId,
            date: new Date()
        })
        navigation.navigate('Workout')
    }

    changeSearchText = (event) => {
        this.setState({searchText: event.nativeEvent.text}, () => {
            const { selectedGroupId, searchText } = this.state
            this.props.fetchExercises({ selectedGroupId, searchText })
        })
        
    }

    changeSelectedGroup = (selectedGroupId) => {
        this.setState({selectedGroupId}, () => {
            const { selectedGroupId, searchText } = this.state
            this.props.fetchExercises({ selectedGroupId, searchText })
        })
    }

    render() {
        const { selectedGroupId, selectedExerciseId } = this.state
        const { muscleGroups, exercises } = this.props

        return (
            <ScrollView>
                { exercises && muscleGroups ?
                    <View>
                        <TextInput 
                            placeholder='search' 
                            onSubmitEditing={this.changeSearchText}
                        />
                        <MuscleGroupPicker 
                            muscleGroups={ muscleGroups } 
                            onChange={ this.changeSelectedGroup }
                            selectedGroup= {selectedGroupId ? selectedGroupId : muscleGroups.length > 0 ? muscleGroups[0].id : null}
                        />
                        <AddExerciseList 
                            exercises={ exercises }
                            selectedExerciseId= { selectedExerciseId }
                            onSelectItem={ this.selectItem }
                        />
                        <Button
                            onPress={ this.addWorkoutExercise }
                            title="Add"
                        />
                    </View> : 
                    <Text> Loading...</Text>
                }
                
            </ScrollView>
        );
    }
}

const mapState = (state: StoreState) => ({
    exercises: getExercises(state),
    muscleGroups: getMuscleGroups(state)
});

const mapDispatch = (dispatch: Dispatch) => bindActionCreators({
        fetchExercises,
        fetchMuscleGroups,
        postTodaysWorkoutExercise
    },
    dispatch
);


export default connect(mapState, mapDispatch)(AddTodaysWorkoutExerciseScreen)