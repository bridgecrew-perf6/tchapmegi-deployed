import Complains from '../components/complains';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
    getComplains,
    getCAnalysis,
    getCategories,
    openCreateCat,
    viewComplain,
    modifyStatus,
    changeStatus,
    closeViewComplain,
    createCat,
    addCat,
    closeCreateCat,
    getMap,
    deleteComplain,
    changeView
} from '../actions/complains';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getComplains,
        getCategories,
        getCAnalysis,
        addCat,
        changeStatus,
        createCat,
        modifyStatus,
        openCreateCat,
        closeCreateCat,
        viewComplain,
        closeViewComplain,
        getMap,
        deleteComplain,
        changeView
    }, dispatch);
};

const mapStateToProps = state => {
    return {
        state: state.complains
    }
};
 
let ComplainContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Complains));

export default ComplainContainer;
