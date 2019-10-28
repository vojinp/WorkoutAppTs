import React from 'react';
import { StyleSheet, Text, FlatList, ViewStyle } from 'react-native';
import Set from '../models/Set';

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    } as ViewStyle
})

interface Props {
    sets: Set[]
}

const SetList = ({
    sets
}: Props) => {

    return (
        <FlatList
            data={ sets }
            renderItem={({item}) => 
                <Text style={styles.item}> {item.weight}kg x {item.reps} </Text>
            }
        />
    )
}

export default SetList