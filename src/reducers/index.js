import { combineReducers } from 'redux';
import login from './login';
import error from './error';
import tasks from './tasks';
import projects from './projects';
import resources from './resources';
import login_status from './login_status';
import customers from './customers';
import employees from './employees';
import complains from './complains';
import wo from './wo';

export default combineReducers({
    login,
    error,
    projects,
    resources,
    tasks,
    customers,
    employees,
    complains,
    wo,
    login_status
});
