/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import AddExerciseContainer from './containers/AddExerciseContainer';
import tabsNavigator from './components/layout/TabView';
import SetsContainer from './containers/SetsContainer';
import AddSetContainer from './containers/AddSetContainer';
import ExerciseListContainer from './containers/ExerciseListContainer';

const App = createStackNavigator({
 	 Workout: {
    	screen: tabsNavigator,
    	navigationOptions: (props) => ({
				title: ['Workout', 'Report'][props.navigation.state.index],
    	}),
	},
	AddExercise: {
		screen: AddExerciseContainer,
		navigationOptions: () => ({
			title: 'Add Exercise',
	  }),
	},
	Sets: {
		screen: SetsContainer,
		navigationOptions: () => ({
			title: 'Sets',
	  }),
	},
	AddSet: {
		screen: AddSetContainer,
		navigationOptions: () => ({
			title: 'Add set',
	  }),
	},
	ExerciseList: {
		screen: ExerciseListContainer,
		navigationOptions: () => ({
			title: 'Exercises',
	  }),
	}
});

export default createAppContainer(App);