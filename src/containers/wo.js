import WO from '../components/working_orders';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
    getWO,
    viewWO,
    closeWO,
    addInfo,
    editWO,
    createWO,
    checkPrompt,
    openCreateWO,
    closeCreateWO,
    openEditWO,
    deleteWO
} from '../actions/wo';

import {
    getCustomers
} from '../actions/customers';

import {
    getEmployees
} from '../actions/employees';

import {
    getTasks
} from '../actions/tasks';

import {
    getProjects
} from '../actions/projects';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getWO,
        getCustomers,
        getEmployees,
        getTasks,
        getProjects,
        viewWO,
        editWO,
        createWO,
        checkPrompt,
        closeWO,
        addInfo,
        openCreateWO,
        closeCreateWO,
        openEditWO,
        deleteWO
    }, dispatch);
};
 
const mapStateToProps = state => {
    return {
        state: state.wo,
        emp: state.employees.employees,
        cust: state.customers.customers,
        proj: state.projects.projects,
        tasks: state.tasks.tasks
    };
};

let WOContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(WO));

export default WOContainer;
