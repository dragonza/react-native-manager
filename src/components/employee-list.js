import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './list-item';

class EmployeesList extends Component {
    componentDidMount() {
        this.props.employeesFetch();
    }

    renderItem = (employee) => {
        const { item } = employee;
        return <ListItem employee={item} />;
    }

    render() {
        if (!this.props.employees.length) return null;
        return (
            <FlatList
                style={{ flex: 1 }}
                data={this.props.employees}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }
}

export default connect((state) => {
    const employees = state.employees ? Object.keys(state.employees).map(employeeId => ({
        ...state.employees[employeeId],
        uid: employeeId
    })) : [];
    return {
        employees,
    };
}, { employeesFetch })(EmployeesList);
