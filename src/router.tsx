import * as React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';


const RouterComponent = (): JSX.Element => {
    return (
        <Router sceneStyle={{ paddingTop: 55 }} >
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" />
            </Scene>
            <Scene key="main" >
                <Scene key="employeeList" component={EmployeeList} title="Employee" rightTitle="Add" onRight={() => {
                    console.log("yeahhh");
                }} />
            </Scene>
        </Router>
    );
};

export default RouterComponent;