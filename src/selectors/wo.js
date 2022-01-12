let woselect = {};
export const getWODetails = state => {
    let obj = state.wo.wo_details;
    Object.keys(obj).map((key, index) => {
        woselect[key] = obj[key].value;
    });
    return woselect;
};

export const getWOID = state => {
    return state.wo.actions.edit_wo.id;
};
