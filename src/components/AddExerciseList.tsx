import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, FlatList, ViewStyle } from 'react-native';
import Exercise from '../models/Exercise';

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    } as ViewStyle
})

interface Props {
    exercises: Exercise[],
    selectedExerciseId: number,
    onSelectItem: PropTypes.func
}

const AddExerciseList = ({
    exercises,
    selectedExerciseId,
    onSelectItem
}: Props) => {
    return (
        <FlatList
            data={ exercises }
            extraData={selectedExerciseId}
            renderItem={({item}) => 
                <Text 
                    key={item}
                    style={[styles.item, item.id === selectedExerciseId ? {backgroundColor: 'lightgray', color: 'white'}: null]}
                    onPress={ () => onSelectItem(item.id) }>
                    {item.name}
                </Text>
            }
        />
    )
}

export default AddExerciseList