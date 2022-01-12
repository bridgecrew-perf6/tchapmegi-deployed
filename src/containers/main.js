import { MainRoute } from '../components/main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
    return {
        state: state
    };
};

let MainContainer = withRouter(connect(mapStateToProps, null)(MainRoute));

export default MainContainer;
