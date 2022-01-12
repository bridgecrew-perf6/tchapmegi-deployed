export const getComplainsDesc = state => {
    return state.complains.complains.map((c)=>{ return c.description; }).reduce((des, index)=>{ return des+' '; });
}

export const getCat = state => {
    return state.complains.actions.cat.cat;
};

export const getComplain = state => {
    return state.complains.actions.change_status.complain;
};


