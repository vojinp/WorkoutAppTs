import * as React from 'react';
import { ScrollView, Button, Text, View } from 'react-native';
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";

import SetList from '../components/SetList'
import NavigatorService from '../services/NavigatorService';
import { getSets } from '../selectors/setsSelector';
import StoreState from '../types/stateTypes/StoreState';
import { fetchSets, FetchSetsAction } from '../actions/setsActions';
import Set from '../models/Set';
import SetSearchParams from '../types/searchTypes/SetSearchParams';

interface Props {
    fetchSets: FetchSetsAction,
    sets: Set[];
    navigation: any;
}

class SetsScreen extends React.Component<Props> {
    componentDidMount() {
        const exerciseId: number = this.props.navigation.state.params['exerciseId'];
        console.log(this.props.sets)
        this.props.fetchSets({exerciseId})
    }

    render() {
        const exerciseId = this.props.navigation.getParam('exerciseId');
        const { sets } = this.props;

        return (
            <ScrollView>
                { sets ? 
                <View>
                    <SetList sets={ sets }/>
                    <Button
                        onPress={() => NavigatorService.navigate('AddSet', {exerciseId})}
                        title="Add set"
                    />
                </View>
                 : <Text>Loading</Text> }
            </ScrollView>
        );
    }
}

const mapState = (state: StoreState) => ({
    sets: getSets(state)
});

const mapDispatch = (dispatch: Dispatch) => bindActionCreators({
        fetchSets
    },
    dispatch
);

export default connect(mapState, mapDispatch)(SetsScreen)