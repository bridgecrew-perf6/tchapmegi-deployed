import Resources from '../components/resources';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
    getResources,
    viewResource,
    addRNR,
    addRName,
    addValidFrom,
    addValidTo,
    addArticle,
    addBSector,
    addGroup,
    addLongName,
    addStore,
    addAddress,
    createResource,
    editResource,
    openCreateResource,
    openEditResource,
    closeCreateResource,
    closeViewResource,
    checkPrompt,
    deleteResource
} from '../actions/resources';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getResources,
        viewResource,
        addRNR,
        addRName,
        addBSector,
        addValidFrom,
        addValidTo,
        addArticle,
        addGroup,
        addLongName,
        addStore,
        addAddress,
        createResource,
        editResource,
        openCreateResource,
        openEditResource,
        closeCreateResource,
        closeViewResource,
        checkPrompt,
        deleteResource
    }, dispatch);
};

const mapStateToProps = state => {
    return {
        state: state.resources
    };
};

let ResourceContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Resources));

export default ResourceContainer;
