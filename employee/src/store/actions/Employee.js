import { authHeader } from '../../utils/authHeader';
import { CLEAR_EMPLOYEE_STATE, DELETE_EMPLOYEE, FETCH_ALL_EMPLOYEES, SAVE_EMPLOYEE, UPDATE_EMPLOYEE } from '../Types';


export function fetchEmployees() {
    return function (dispatch) {
        fetch('http://localhost:8095/api/employee/employees', {
            // headers: authHeader()
        }).then(response => response.json())
            .then(function (response) {
                console.log(response)
                dispatch({
                    type: FETCH_ALL_EMPLOYEES,
                    payload: response,
                    message: {
                        type: 'success',
                        content: '',
                        isShow: false
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () { });

    };
}

export function saveEmployees(employee) {
    return function (dispatch) {
        fetch('http://localhost:8095/api/employee/save', {
            // headers: authHeader()
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            method:'POST',
            body:JSON.stringify(employee)
        }).then(response => response.json())
            .then(function (response) {
                console.log(response)
                dispatch({
                    type: SAVE_EMPLOYEE,
                    payload: response,
                    message: {
                        type: 'success',
                        content: '',
                        isShow: false
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () { });

    };
}

export function deleteEmployees(empId) {
    return function (dispatch) {
        fetch(`http://localhost:8095/api/employee/delete/${empId}`, {
          
            method:'DELETE'
        }).then(function (response) {
                console.log(response)
                dispatch({
                    type: DELETE_EMPLOYEE,
                    payload: {},
                    message: {
                        type: 'success',
                        content: '',
                        isShow: false
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () { });

    };
}

export function updateEmployees(employee) {
    return function (dispatch) {
        fetch(`http://localhost:8095/api/employee/update/${employee.empId}`, {
            // headers: authHeader()
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            method:'POST',
            body:JSON.stringify(employee)
        }).then(response => response.json())
            .then(function (response) {
                console.log(response)
                dispatch({
                    type: UPDATE_EMPLOYEE,
                    payload: response,
                    message: {
                        type: 'success',
                        content: '',
                        isShow: false
                    }
                })
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () { });

    };
}

export function clearState() {
    return function (dispatch) {
       
                dispatch({
                    type: CLEAR_EMPLOYEE_STATE,
                    payload: {},
                    message: {
                        type: 'success',
                        content: '',
                        isShow: false
                    }
                })
       
    };
}