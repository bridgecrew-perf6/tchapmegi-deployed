import Customers from '../components/tasks';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
/*import {
    getTasks,
    deleteTask,
    addTask,
    addName,
    addDescription,
    closeCreateTask,
    createTask,
    openEditTask,
    checkPrompt,
    editTask,
    openCreateTask
} from '../actions/tasks';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getTasks,
        deleteTask,
        addTask,
        addName,
        addDescription,
        closeCreateTask,
        createTask,
        openEditTask,
        checkPrompt,
        editTask,
        openCreateTask
    }, dispatch);
};*/
 
const mapStateToProps = state => {
    return {
        state: state.tasks
    };
};

let CustomerContainer = withRouter(connect(null, null)(Customers));

export default CustomerContainer;
