import React from 'react';
import { StyleSheet, Text, FlatList, ViewStyle } from 'react-native';
import WorkoutExerciseWithName from '../models/WorkoutExerciseWithName';
import NavigatorService from '../services/NavigatorService';

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    } as ViewStyle
})

interface Props {
    exercises: WorkoutExerciseWithName[]
}

const ExerciseList = ({
    exercises
}: Props) => {
    console.log(exercises)
    return (
        <FlatList
            data={ exercises }
            extraData= {Math.random()}
            renderItem={({item}) => 
                <Text 
                    onPress={() => 
                        NavigatorService.
                        navigate('Sets', {
                        exerciseId: item.id,
                        exerciseName: item.name,
                    })} 
                    style={styles.item}>{item.name}
                </Text>
            }
        />
    )
}

export default ExerciseList