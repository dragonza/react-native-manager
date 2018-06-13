import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>

    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderColor: '#007aff',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#fff'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: '#007aff',
        paddingTop: 10,
        paddingBottom: 10,

    }
}

export { Button };
