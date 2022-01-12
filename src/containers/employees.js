import Employees from '../components/employees';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
    getEmployees,
    authEmployee,
    openCreateEmp,
    closeCreateEmp,
    checkPrompt,
    createEmp,
    editEmp,
    openEditEmp,
    openAuth,
    addInfo,
    closeAuth,
    changeAuth,
    authUpdate,
    viewEmployee,
    closeViewEmployee,
    deleteEmployee
} from '../actions/employees';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getEmployees,
        authEmployee,
        openAuth,
        checkPrompt,
        openCreateEmp,
        closeCreateEmp,
        createEmp,
        editEmp,
        openEditEmp,
        addInfo,
        closeAuth,
        authUpdate,
        changeAuth,
        viewEmployee,
        closeViewEmployee,
        deleteEmployee
    }, dispatch);
};

 const mapStateToProps = state => {
     return {
         state: state.employees
     };
 };
 
let EmployeeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Employees));

export default EmployeeContainer;
