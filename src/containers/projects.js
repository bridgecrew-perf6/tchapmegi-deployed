import Projects from '../components/projects';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
    viewProject,
    deleteProject,
    checkPrompt,
    editProject,
    createProject,
    openEditProject,
    openCreateProject,
    closeCreateProject,
    closeViewProject,
    addProjectName,
    addCustomerName,
    addContactPerson,
    addStartDate,
    addEndDate,
    addPhone,
    addFax,
    addEmail,
    addCity,
    addAddress,
    getProjects
} from '../actions/projects';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        viewProject,
        checkPrompt,
        createProject,
        editProject,
        openEditProject,
        openCreateProject,
        addProjectName,
        addCustomerName,
        addContactPerson,
        addStartDate,
        addEndDate,
        addPhone,
        addFax,
        addEmail,
        addCity,
        addAddress,
        closeCreateProject,
        deleteProject,
        closeViewProject,
        getProjects
    }, dispatch);
};

const mapStateToProps = state => {
    return {
        state: state.projects
    };
};

let ProjectContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects));

export default ProjectContainer;
