import { actionCreator, isType, Action } from '../actions/actionCreator';
import { emailChanged, passwordChanged } from '../actions';

const INITIAL_STATE = { email: '', pass: '' };

export default (state: any = INITIAL_STATE, action: Action<any>): any => {
    if (isType(action, emailChanged)) {
        return { ...state, email: action.payload };
    }
    if (isType(action, passwordChanged)) {
        return { ...state, pass: action.payload };
    } else {
        return state;
    }
}