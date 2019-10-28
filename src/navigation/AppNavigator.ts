import {createStackNavigator, createAppContainer} from 'react-navigation';

import TabNavigator from './TabNavigator';
import AddTodaysWorkoutExerciseScreen from '../screens/AddTodaysWorkoutExerciseScreen';
import SetsScreen from '../screens/SetsScreen';
import AddSetScreen from '../screens/AddSetScreen';
import ExerciseListScreen from '../screens/ExerciseListScreen';

export default createAppContainer(createStackNavigator({
 	 Workout: {
    	screen: TabNavigator,
    	navigationOptions: (props) => ({
				title: ['Workout', 'Report'][props.navigation.state.index],
    	}),
	},
	AddExercise: {
		screen: AddTodaysWorkoutExerciseScreen,
		navigationOptions: () => ({
			title: 'Add Exercise',
	  }),
	},
	Sets: {
		screen: SetsScreen,
		navigationOptions: () => ({
			title: 'Sets',
	  }),
	},
	AddSet: {
		screen: AddSetScreen,
		navigationOptions: () => ({
			title: 'Add set',
	  }),
	},
	ExerciseList: {
		screen: ExerciseListScreen,
		navigationOptions: () => ({
			title: 'Exercises',
	  }),
	}
}))