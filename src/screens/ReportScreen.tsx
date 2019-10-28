import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

interface Props {
    navigation: any;
}

class ReportScreen extends React.Component<Props> {

    onDateChange = (date: Date) => {
        this.props.navigation.navigate('ExerciseList', {date})
    }

    render() {
        return (
            <View>
                <CalendarPicker
                    onDateChange={this.onDateChange}
                />
            </View>
        );
    }
}


export default ReportScreen