export const getCustomer = state => {
    let customer = state.customers.customer_details;
    return {
	    customer_name: customer.customer_name.value,
	    debitor_number: customer.debitor_number.value,
	    creation_date: customer.creation_date.value,
	    edited_on: customer.edited_on.value,
	    edited_by: customer.edited_by.value,
	    salutation: customer.salutation.value,
	    phone: customer.phone.value,
	    email: customer.email.value,
	    website: customer.website.value,
	    address_city: customer.address_city.value,
	    address: customer.address.value,
	    address_postcode: customer.address_postcode.value,
	    address_countrycode: customer.address_countrycode.value,
	    postbox_name: customer.postbox_name.value,
	    postbox_postcode: customer.postbox_postcode.value,
	    postbox_city: customer.postbox_city.value,
	    postbox_countrycode: customer.postbox_countrycode.value,
	    bank: customer.bank.value,
	    bank_code: customer.bank_code.value,
	    bank_account: customer.bank_account.value,
	    bank_user: customer.bank_user.value,
	    bank_iban: customer.bank_iban.value,
	    bank_bic: customer.bank_bic.value,
	    bank_countrycode: customer.bank_countrycode.value,
	    bank_currency: customer.bank_currency.value
        };
};

export const getEditCustomerId = state => state.customers.actions.edit_customer.id;
