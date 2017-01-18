import * as React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';
import EmployeeEdit from './component/EmployeeEdit';

const RouterComponent = (): JSX.Element => {
    return (
        <Router sceneStyle={{ paddingTop: 55 }} >
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" />
            </Scene>
            <Scene key="main" >
                <Scene key="employeeList" component={EmployeeList} title="Employee" rightTitle="Add" initial onRight={() => {
                    Actions.employeeCreate()
                }} />
                <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
                <Scene key="employeeEdit" title="Edit Employee" component={EmployeeEdit} />                
            </Scene>
        </Router>
    );
};

export default RouterComponent;