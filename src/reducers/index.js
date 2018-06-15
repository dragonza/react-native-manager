import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployCreateReducer from './EmployeeFormReducer';
import EmployeesReducer from './EmployeesReducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployCreateReducer,
    employees: EmployeesReducer,
});
