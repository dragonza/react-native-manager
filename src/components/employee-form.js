import React, { Component } from 'react';
import { View, Text, Picker,  } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate, clearForm } from '../actions';

class EmployeeForm extends Component {
    componentWillUnmount() {
        this.props.clearForm();
    }

    render() {
        const { name, phone, shift } = this.props;
        return (
            <View>
                <CardSection>
                    <Input
                        value={name}
                        label="Name"
                        placeholder="Alice"
                        onChangeText={(text) => this.props.employeeUpdate(text, 'name')}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        value={phone}
                        label="Phone"
                        placeholder="555-555-5555"
                        onChangeText={(text) => this.props.employeeUpdate(text, 'phone')}
                    />
                </CardSection>
                <CardSection style={styles.shiftStyle}>
                    <Text style={styles.labelStyle}>Shift</Text>
                    <Picker
                        selectedValue={shift}
                        onValueChange={(day) => this.props.employeeUpdate(day, 'shift')}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}


const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
    shiftStyle: {
        flexDirection: 'column'
    }
};

export default connect((state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}, { employeeUpdate, clearForm })(EmployeeForm);
