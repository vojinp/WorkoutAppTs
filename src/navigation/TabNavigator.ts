import {createMaterialTopTabNavigator, createNavigationContainer} from 'react-navigation';

import WorkoutScreen from '../screens/WorkoutScreen';
import ReportScreen from '../screens/ReportScreen';

export default createNavigationContainer(createMaterialTopTabNavigator({
	Workout: {screen: WorkoutScreen},
	Report: {screen: ReportScreen},
}))
