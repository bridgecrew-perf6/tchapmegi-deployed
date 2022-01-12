export const getAuthDetails = state => {
    return state.employees.actions.auth.emp;
};

let empselect = {};
export const getEmployeeDetails =  state => {
    let obj =state.employees.employee_details;
    Object.keys(obj).map((key, index) => {
        empselect[key] = obj[key].value;
    });
    return empselect;
}

export const getEmployeeID = state => {
    return state.employees.actions.edit_emp.id;
};

