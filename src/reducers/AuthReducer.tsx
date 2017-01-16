import { actionCreator, isType, Action } from '../actions/actionCreator';
import { emailChanged, passwordChanged } from '../actions';

const INITIAL_STATE = { email: '', pass: '', user: null, error: '', loading: false };

export default (state: any = INITIAL_STATE, action: Action<any>): any => {
    if (isType(action, emailChanged)) {
        return { ...state, email: action.payload };
    }
    else if (isType(action, passwordChanged)) {
        return { ...state, pass: action.payload };
    }
    else if(action.type == "login_user_success"){
        return {...state, ...INITIAL_STATE, user: action.payload };
    }
    else if(action.type == "login_user_fail"){
        return {...state, error: 'Athentication Failed.', pass: '', loading: false };
    }
    else if(action.type == "login_user"){
        return {...state, loading: true, error: '' };
    }
     else {
        return state;
    }
}