import LoginStatus from '../components/login_status';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
    getLoginStatus,
    getLoginStatusSearch
} from '../actions/login_status';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getLoginStatus,
        getLoginStatusSearch
    }, dispatch);
};

const mapStateToProps = state => {
    return {
        state: state.login_status
    };
};

let LoginStatusContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginStatus));

export default LoginStatusContainer;
