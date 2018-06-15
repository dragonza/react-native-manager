import React from 'react';
import { Actions } from 'react-native-router-flux'
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';

class ListItem extends React.Component {

    render() {
        const { name } = this.props.employee;
        const { employee } = this.props;
        return (
            <TouchableWithoutFeedback onPress={() => Actions.employeeEdit({ employee })}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>

        );
    }
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 10
    }
}

export default ListItem;
