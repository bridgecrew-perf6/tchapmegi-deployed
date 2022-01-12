import Customers from '../components/customers';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {
    getCustomers,
    viewCustomer,
    openCreateCustomer,
    checkPrompt,
    editCustomer,
    createCustomer,
    openEditCustomer,
    closeCreateCustomer,
    closeViewCustomer,
    addCName,
    addDNum,
    addCreationDate,
    addEditedOn,
    addEditedBy,
    addSalutation,
    addPhone,
    addEmail,
    addWebsite,
    addAddrCity,
    addAddr,
    addAddrPCode,
    addAddrCcode,
    addPBoxName,
    addPBoxPCode,
    addPBoxCity,
    addPBoxCCode,
    addBank,
    addBankAccount,
    addBankUser,
    addBankIBAN,
    addBankBIC,
    addBankCCode,
    addBankCurrency,
    deleteCustomer
} from '../actions/customers';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getCustomers,
        viewCustomer,
        checkPrompt,
        createCustomer,
        editCustomer,
        openCreateCustomer,
        openEditCustomer,
        addCName,
        addDNum,
        addCreationDate,
        addEditedOn,
        addEditedBy,
        addSalutation,
        addPhone,
        addEmail,
        addWebsite,
        addAddrCity,
        addAddr,
        addAddrPCode,
        addAddrCcode,
        addPBoxName,
        addPBoxPCode,
        addPBoxCity,
        addPBoxCCode,
        addBank,
        addBankAccount,
        addBankUser,
        addBankIBAN,
        addBankBIC,
        addBankCCode,
        addBankCurrency,
        closeCreateCustomer,
        closeViewCustomer,
        deleteCustomer
    }, dispatch);
};

const mapStateToProps = state => {
    return {
        state: state.customers
    }
};
 
let CustomerContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Customers));

export default CustomerContainer;
