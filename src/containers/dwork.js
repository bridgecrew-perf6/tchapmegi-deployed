import DWork from '../components/dwork';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import {
    getEmployees
} from '../actions/employees';

import {
    getWO
} from '../actions/wo';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getEmployees,
        getWO
    }, dispatch);
};
 
const mapStateToProps = state => {
    return {
        emp: state.employees.employees,
        wo: state.wo.wo,
        load1: state.employees.loading,
        load2: state.wo.loading
    };
};

let DWorkContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(DWork));

export default DWorkContainer;
