import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';
import MuscleGroup from '../models/MuscleGroup';

interface Props {
    muscleGroups: MuscleGroup[],
    selectedGroup: number,
    onChange: PropTypes.func
}

const MousleGroupPicker = ({
    muscleGroups,
    selectedGroup,
    onChange
}: Props) => {

    return (
        <Picker
            style={{ height: 50, width: 600 }}
            onValueChange={(itemValue) => onChange(itemValue)}
            selectedValue={selectedGroup}
            >
            { muscleGroups.map((item) => 
                <Picker.Item label={item.name} value={item.id} />
            )}
        </Picker>
    )
}

export default MousleGroupPicker