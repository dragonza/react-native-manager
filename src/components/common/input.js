import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { labelStyle, inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20,
    },
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        height: 40,

    },
    inputStyle: {
          color: '#000',
          paddingRight: 5,
          paddingLeft: 5,
          fontSize: 18,
          lineHeight: 23,
          flex: 3
    }
};
export { Input };
