import { LoginRoute } from '../components/login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
    addUsername,
    addPassword,
    loginRequest
} from '../actions/login';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addUsername,
        addPassword,
        loginRequest
    }, dispatch);
};

const mapStateToProps = state => {
    return {
        state: state.login
    };
};

let LoginContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginRoute));

export default LoginContainer;
