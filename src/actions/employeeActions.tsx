import { actionCreator } from './actionCreator';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';



export const employeeUpdate = actionCreator<{ prop: any, value: any }>('employee_update');

export const employeeCreate = ({name, phone, shift}) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`).push({ name, phone, shift })
            .then(() => {
                dispatch({ type: 'employee_create' });
                Actions.employeeList({ type: 'reset' });
            });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`).on('value', snapshot => {
            dispatch({ type: 'employees_fetch_success', payload: snapshot.val() });
        });
    };
};

export const employeeSave = ({name, phone, shift, uid}) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).set({ name, phone, shift })
            .then(() => { 
                Actions.employeeList({ type: 'reset' });
                dispatch({ type: 'employee_save_success' });
            });
    };
};

export const employeeDelete = ({uid}) =>{
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`).remove()
         .then(() => { 
                Actions.employeeList({ type: 'reset' });
                dispatch({ type: 'employee_save_success' });
            });
    };
}