import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { Input, Card, CardSection, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './employee-form';

class EmployeeCreate extends Component {
    onButtonPress = () => {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Create
                    </Button>
                </CardSection>

            </Card>
        );
    }
}


export default connect((state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}, { employeeUpdate, employeeCreate })(EmployeeCreate);
