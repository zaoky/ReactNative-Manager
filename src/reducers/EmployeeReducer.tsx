import { actionCreator, isType, Action } from '../actions/actionCreator';

const INITIAL_STATE = { };

export default (state: any = INITIAL_STATE, action: Action<any>): any => {
    if (action.type == 'employees_fetch_success') {
        return action.payload;
    }
    else {
        return state;
    }
}