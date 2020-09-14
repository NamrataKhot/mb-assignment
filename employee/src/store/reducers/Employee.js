import { DELETE_EMPLOYEE, FETCH_ALL_EMPLOYEES, SAVE_EMPLOYEE, UPDATE_EMPLOYEE, CLEAR_EMPLOYEE_STATE } from '../Types';

const initialState = {
    employees: [],
    employee: {},
    message: {
        type: 'success',
        content: '',
        isShow: false
    },
    isUpdated: false,
    isDeleted: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                message: action.message
            };

        case SAVE_EMPLOYEE:
            return {
                ...state,
                employee: action.payload,
                message: action.message
            };
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employee: action.payload,
                message: action.message,
                isDeleted: true,
            };
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                employee: action.payload,
                message: action.message,
                isUpdated: true
            };
            case CLEAR_EMPLOYEE_STATE:
            return {
                ...state,
                isUpdated: false,
                isDeleted: false,
            };
        default:
            return state;
    }
}