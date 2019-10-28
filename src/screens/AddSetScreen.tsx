import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import StoreState from '../types/stateTypes/StoreState';
import { postSet, PostSetAction } from '../actions/setsActions';
import Set from '../models/Set'
import { getSets } from '../selectors/setsSelector';

interface Props {
    navigation: any;
    postSet: PostSetAction,
    sets: Set[]
}

class AddSetScreen extends React.Component<Props> {
    state = {
        weight: 0,
        reps: 0
    }

    addSet = () => {
        const exerciseId = this.props.navigation.getParam('exerciseId');
        const { weight, reps } = this.state
        this.props.postSet({
            exerciseId,
            weight,
            reps
        })
        this.props.navigation.navigate('Sets', {exerciseId})
    }

    render() {
        const { weight, reps } = this.state
        
        return (
            <View>
                { this.props.sets ? 
                    <View>
                        <Text> Weight </Text>
                        <TextInput onChangeText={(weight) => this.setState({weight})}/>
                        <Text> Reps </Text>
                        <TextInput onChangeText={(reps) => this.setState({reps})}/>
                        <Button
                            onPress={ this.addSet }
                            title="Add"
                            disabled={weight === 0 || reps === 0}
                        />
                    </View> : 
                    <Text> Loading... </Text> 
                }
                
            </View>
        );
    }
}

const mapState = (state: StoreState) => ({
    sets: getSets(state)
});

const mapDispatch = (dispatch: Dispatch) => bindActionCreators({
        postSet
    },
    dispatch
);


export default connect(mapState, mapDispatch)(AddSetScreen)