import { actionCreator, isType, Action } from '../actions/actionCreator';
import { employeeUpdate } from '../actions/employeeActions';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state: any = INITIAL_STATE, action: Action<any>): any => {

    if (isType(action, employeeUpdate)) {
        return { ...state, [action.payload.prop]: action.payload.value };
    }
    else if (action.type == "employee_create") {
        return { INITIAL_STATE };
    }
    else if (action.type == 'employee_save_success') {
        return INITIAL_STATE;
    }
    else {
        return state;
    }
}