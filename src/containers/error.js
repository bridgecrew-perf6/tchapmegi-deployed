import { Error } from '../components/error';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
    removeError
} from '../actions/error';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        removeError
    }, dispatch);
};

const mapStateToProps = state => {
    return {
        state: state.error
    };
};

let ErrorContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Error));

export default ErrorContainer;
