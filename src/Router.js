import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login-form';
import EmployeeList from './components/employee-list';
import EmployeeCreate from './components/employee-create';
import EmployeeEdit from './components/employee-edit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        title="Please login"
                        initial
                        component={LoginForm}
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        rightTitle="Add"
                        onRight={() => { Actions.employeeCreate(); }}
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create employee"
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                    />

                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
