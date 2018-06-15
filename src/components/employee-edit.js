import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './employee-form';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }

    componentDidMount() {
        const { employee } = this.props;
        Object.keys(employee).forEach(key => {
           this.props.employeeUpdate(employee[key], key);
        });
    }

    componentWillUmount() {

    }

    onButtonPress = () => {
        const { name, phone, shift, employee } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: employee.uid });
    };

    onTextPress = () => {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcomming shift: ${shift}`);
    };

    onAccept = () => {
        this.props.employeeDelete({ uid: this.props.employee.uid });
        this.setState(() => ({ showModal: false }));
    }

    onCancel = () => {
        this.setState(() => ({ showModal: false }));
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress}>
                        Text
                    </Button>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={() => this.setState((prevState) => {
                            return {
                                showModal: !prevState.showModal
                            };
                        })}
                    >
                        Fire
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept}
                    onCancel={this.onCancel}
                >
                    Are you sure?
                </Confirm>
            </Card>
        );
    }
}

export default connect((state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
