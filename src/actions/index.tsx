import { actionCreator } from './actionCreator';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = actionCreator<{ text: string }>("email_changed");

export const passwordChanged = actionCreator<{ text: string }>("password_changed");

// export const loginUserSuccess = actionCreator<{ loginUser() }>("login_user_success");

export const loginUser = (email: string, pass: string) => {
    return (dispatch) => {
        dispatch({type: 'login_user'});
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, pass)
                .then(user => loginUserSuccess(dispatch, user))
                .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserFail = (dispatch) =>{
    dispatch({type: 'login_user_fail'});
}

const loginUserSuccess = (dispatch, user ) =>{
    dispatch({type: 'login_user_success', payload: user});
    Actions.main();
}