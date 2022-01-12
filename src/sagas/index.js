import { all, fork } from 'redux-saga/effects';
import { watchLoginSaga as loginSaga } from './loginSaga';
import { watchFetchTasksSaga as fetchTasksSaga } from './fetchTasksSaga';
import { watchRemoveTaskSaga as removeTaskSaga } from './removeTaskSaga';
import { watchCreateTaskSaga as createTaskSaga } from './createTaskSaga';
import { watchEditTaskSaga as editTaskSaga } from './editTaskSaga';
import { watchEditProjectSaga as editProjectSaga } from './editProjectSaga';
import { watchFetchProjectsSaga as fetchProjectsSaga } from './fetchProjectsSaga';
import { watchRemoveProjectSaga as removeProjectSaga } from './removeProjectSaga';
import { watchCreateProjectSaga as createProjectSaga } from './createProjectSaga';
import { watchFetchResourcesSaga as fetchResourcesSaga } from './fetchResourcesSaga';
import { watchRemoveResourceSaga as removeResourceSaga } from './removeResourceSaga';
import { watchCreateResourceSaga as createResourceSaga } from './createResourceSaga';
import { watchEditResourceSaga as editResourceSaga } from './editResourceSaga';
import { watchFetchLoginStatusSaga as fetchLoginStatusSaga } from './fetchLoginStatusSaga';
import { watchSearchLoginStatusSaga as searchLoginStatusSaga } from './searchLoginStatusSaga';
import { watchFetchCustomersSaga as fetchCustomersSaga } from './fetchCustomersSaga';
import { watchRemoveCustomerSaga as removeCustomerSaga } from './removeCustomerSaga';
import { watchCreateCustomerSaga as createCustomerSaga } from './createCustomerSaga';
import { watchEditCustomerSaga as editCustomerSaga } from './editCustomerSaga';
import { watchFetchEmployeesSaga as fetchEmployeesSaga } from './fetchEmployeesSaga';
import { watchCreateEmployeeSaga as createEmployeeSaga } from './createEmployeeSaga';
import { watchEditEmployeeSaga as editEmployeeSaga } from './editEmployeeSaga';
import { watchFetchEmployeeAuthSaga as fetchEmployeeAuthSaga } from './fetchEmployeeAuthSaga';
import { watchEditEmployeeAuthSaga as editEmployeeAuthSaga } from './editEmployeeAuthSaga';
import { watchRemoveEmployeeSaga as removeEmployeeSaga } from './removeEmployeeSaga';
import { watchFetchComplainsSaga as fetchComplainsSaga } from './fetchComplainsSaga';
import { watchRemoveComplainSaga as removeComplainSaga } from './removeComplainSaga';
import { watchFetchMapSaga as fetchMapSaga } from './fetchMapSaga';
import { watchFetchCAnalysisSaga as fetchCAnalysisSaga } from './fetchCAnalysisSaga';
import { watchCreateCatSaga as createCategorySaga } from './createCategorySaga';
import { watchFetchCategoriesSaga as fetchCategoriesSaga } from './fetchCategoriesSaga';
import { watchChangeStatusSaga as changeStatusSaga } from './changeStatusSaga';
import { watchFetchWOSaga as fetchWOSaga } from './fetchWOSaga';
import { watchRemoveWOSaga as removeWOSaga } from './removeWOSaga';
import { watchCreateWOSaga as createWOSaga } from './createWOSaga';
import { watchEditWOSaga as editWOSaga } from './editWOSaga';

export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(fetchTasksSaga),
        fork(fetchProjectsSaga),
        fork(removeTaskSaga),
        fork(editTaskSaga),
        fork(editProjectSaga),
        fork(createTaskSaga),
        fork(createProjectSaga),
        fork(fetchResourcesSaga),
        fork(removeResourceSaga),
        fork(removeProjectSaga),
        fork(editResourceSaga),
        fork(createResourceSaga),
        fork(fetchLoginStatusSaga),
        fork(searchLoginStatusSaga),
        fork(fetchCustomersSaga),
        fork(removeCustomerSaga),
        fork(createCustomerSaga),
        fork(editCustomerSaga),
        fork(fetchEmployeesSaga),
        fork(fetchEmployeeAuthSaga),
        fork(editEmployeeAuthSaga),
        fork(removeEmployeeSaga),
        fork(createEmployeeSaga),
        fork(editEmployeeSaga),
        fork(fetchComplainsSaga),
        fork(removeComplainSaga),
        fork(fetchMapSaga),
        fork(fetchCAnalysisSaga),
        fork(createCategorySaga),
        fork(fetchCategoriesSaga),
        fork(changeStatusSaga),
        fork(fetchWOSaga),
        fork(removeWOSaga),
        fork(createWOSaga),
        fork(editWOSaga)
    ]);
};
