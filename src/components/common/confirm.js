import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './card-section';
import { Button } from './button';

const Confirm = ({ children, onAccept, onCancel, visible }) => {
    const { cardSectionStyle, containerStyle, textStyle } = styles;
    return (
        <Modal
            transparent
            visible={visible}
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onCancel}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, .75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    }
};

export { Confirm };
