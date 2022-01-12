import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LinearProgress from "@material-ui/core/LinearProgress";
import { CustomerList } from "./customerList";
import format from "date-fns/format";
import AuthenticatedNavbar from "./../authenticatedNavbar/AuthenticatedNavbar";
import "./../global.css";

class Customers extends Component {
	componentDidMount() {
		this.props.getCustomers();
	}

	render() {
		let actions = {
			deleteCustomer: this.props.deleteCustomer,
			openEditCustomer: this.props.openEditCustomer,
			viewCustomer: this.props.viewCustomer,
		};

		let state = this.props.state;
		let {
			customer_name,
			debitor_number,
			creation_date,
			edited_on,
			edited_by,
			salutation,
			phone,
			email,
			website,
			address_city,
			address,
			address_postcode,
			address_countrycode,
			postbox_name,
			postbox_postcode,
			postbox_city,
			postbox_countrycode,
			bank,
			bank_code,
			bank_account,
			bank_user,
			bank_iban,
			bank_bic,
			bank_countrycode,
			bank_currency,
		} = state.customer_details;

		let disabled =
			!customer_name.valid ||
			!debitor_number.valid ||
			!creation_date.valid ||
			!edited_on.valid ||
			!edited_by.valid ||
			!salutation.valid ||
			!phone.valid ||
			!email.valid ||
			(state.actions.edit_customer.id !== null && !state.actions.edit_customer.checked);
		let view_customer_open = state.actions.view_customer.open;
		let opened_customer = state.actions.view_customer.customer;
		let create_customer_open = state.open;
		return (
			<>
				<AuthenticatedNavbar />
				<div className="container">
					{/* CREATE CUSTOMER */}
					<Dialog
						open={create_customer_open}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "10px 5px",
							},
						}}
					>
						<DialogTitle style={{ fontWeight: "bold" }}>
							{state.actions.edit_customer.id !== null ? "Edit" : "Create"}
						</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Customer Name"
								fullWidth
								value={customer_name.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!customer_name.valid && customer_name.entered}
								onChange={({ target: { value } }) => this.props.addCName(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Debitor Number"
								fullWidth
								value={debitor_number.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!debitor_number.valid && debitor_number.entered}
								onChange={({ target: { value } }) => this.props.addDNum(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Creation Date"
								fullWidth
								value={
									state.actions.edit_customer.id !== null
										? format(new Date(creation_date.value), "yyyy-MM-dd")
										: creation_date.value
								}
								type="date"
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!creation_date.valid && creation_date.entered}
								onChange={({ target: { value } }) =>
									this.props.addCreationDate(value)
								}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Edited On"
								fullWidth
								type="date"
								value={
									state.actions.edit_customer.id !== null
										? format(new Date(edited_on.value), "yyyy-MM-dd")
										: edited_on.value
								}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!edited_on.valid && edited_on.entered}
								onChange={({ target: { value } }) => this.props.addEditedOn(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Edited By"
								fullWidth
								value={edited_by.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!edited_by.valid && edited_by.entered}
								onChange={({ target: { value } }) => this.props.addEditedBy(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Salutation"
								fullWidth
								value={salutation.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!salutation.valid && salutation.entered}
								onChange={({ target: { value } }) =>
									this.props.addSalutation(value)
								}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Phone"
								fullWidth
								value={phone.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!phone.valid && phone.entered}
								onChange={({ target: { value } }) => this.props.addPhone(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Email"
								fullWidth
								value={email.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!email.valid && email.entered}
								onChange={({ target: { value } }) => this.props.addEmail(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Website"
								fullWidth
								value={website.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!website.valid && website.entered}
								onChange={({ target: { value } }) => this.props.addWebsite(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Address"
								fullWidth
								value={address.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!address.valid && address.entered}
								onChange={({ target: { value } }) => this.props.addAddr(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Address City"
								fullWidth
								value={address_city.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!address_city.valid && address_city.entered}
								onChange={({ target: { value } }) => this.props.addAddrCity(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Address Postcode"
								fullWidth
								value={address_postcode.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!address_postcode.valid && address_postcode.entered}
								onChange={({ target: { value } }) => this.props.addAddrPCode(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Address Country Code"
								fullWidth
								value={address_countrycode.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!address_countrycode.valid && address_countrycode.entered}
								onChange={({ target: { value } }) => this.props.addAddrCcode(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Postbox Name"
								fullWidth
								value={postbox_name.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!postbox_name.valid && postbox_name.entered}
								onChange={({ target: { value } }) => this.props.addPBoxName(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Postbox Postcode"
								fullWidth
								value={postbox_postcode.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!postbox_postcode.valid && postbox_postcode.entered}
								onChange={({ target: { value } }) => this.props.addPBoxPCode(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Postbox City"
								fullWidth
								value={postbox_city.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!postbox_city.valid && postbox_city.entered}
								onChange={({ target: { value } }) => this.props.addPBoxCity(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Postbox Countrycode"
								fullWidth
								value={postbox_countrycode.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!postbox_countrycode.valid && postbox_countrycode.entered}
								onChange={({ target: { value } }) => this.props.addPBoxCCode(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Bank"
								fullWidth
								value={bank.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!bank.valid && bank.entered}
								onChange={({ target: { value } }) => this.props.addBank(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Bank Account"
								fullWidth
								value={bank_account.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!bank_account.valid && bank_account.entered}
								onChange={({ target: { value } }) =>
									this.props.addBankAccount(value)
								}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Bank User"
								fullWidth
								value={bank_user.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!bank_user.valid && bank_user.entered}
								onChange={({ target: { value } }) => this.props.addBankUser(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Bank IBAN"
								fullWidth
								value={bank_iban.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!bank_iban.valid && bank_iban.entered}
								onChange={({ target: { value } }) => this.props.addBankIBAN(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Bank BIC"
								fullWidth
								value={bank_bic.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!bank_bic.valid && bank_bic.entered}
								onChange={({ target: { value } }) => this.props.addBankBIC(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Bank Country Code"
								fullWidth
								value={bank_countrycode.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!bank_countrycode.valid && bank_countrycode.entered}
								onChange={({ target: { value } }) => this.props.addBankCCode(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Bank Currency"
								fullWidth
								value={bank_currency.value}
								disabled={
									state.actions.create_customer.loading ||
									state.actions.edit_customer.loading
								}
								error={!bank_currency.valid && bank_currency.entered}
								onChange={({ target: { value } }) =>
									this.props.addBankCurrency(value)
								}
							/>
							{state.actions.edit_customer.id !== null ? (
								<FormControlLabel
									control={
										<Checkbox
											checked={state.actions.edit_customer.checked}
											onChange={(e) => this.props.checkPrompt()}
											color="primary"
										/>
									}
									label="I confirm to edit this customer"
								/>
							) : null}
							{state.actions.edit_customer.loading ||
							state.actions.create_customer.loading ? (
								<LinearProgress />
							) : null}
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								color="secondary"
								onClick={(e) => this.props.closeCreateCustomer()}
							>
								Close
							</button>
							<button
								color="primary"
								className={disabled ? "edit-btn custom-disabled" : "edit-btn"}
								disabled={disabled}
								onClick={(e) => {
									state.actions.edit_customer.id !== null
										? this.props.editCustomer()
										: this.props.createCustomer();
								}}
							>
								{state.actions.edit_customer.id !== null ? "Edit" : "Create"}
							</button>
						</DialogActions>
					</Dialog>

					{/* VIEW CUSTOMER */}
					<Dialog
						open={view_customer_open}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
								width: "50%"
							},
						}}
					>
						<DialogTitle style={{ fontWeight: "bold" }}>
							{opened_customer.customer_name}
						</DialogTitle>
						<DialogContent>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Debitor Number</TableCell>
										<TableCell>{opened_customer.debitor_number}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Creation Date</TableCell>
										<TableCell>{opened_customer.creation_date}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Edited On</TableCell>
										<TableCell>{opened_customer.edited_on}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Edited By</TableCell>
										<TableCell>{opened_customer.edited_by}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Salutation</TableCell>
										<TableCell>{opened_customer.salutation}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Phone</TableCell>
										<TableCell>{opened_customer.phone}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
										<TableCell>{opened_customer.email}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Website</TableCell>
										<TableCell>{opened_customer.website}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Address</TableCell>
										<TableCell>{opened_customer.address}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Address City</TableCell>
										<TableCell>{opened_customer.address_city}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Address Postcode</TableCell>
										<TableCell>{opened_customer.address_postcode}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Address Country Code</TableCell>
										<TableCell>{opened_customer.address_countrycode}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Postbox Name</TableCell>
										<TableCell>{opened_customer.postbox_name}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Postbox Postcode</TableCell>
										<TableCell>{opened_customer.postbox_postcode}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Postbox City</TableCell>
										<TableCell>{opened_customer.postbox_city}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Postbox Country Code</TableCell>
										<TableCell>{opened_customer.postbox_countrycode}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Bank</TableCell>
										<TableCell>{opened_customer.bank}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Bank Code</TableCell>
										<TableCell>{opened_customer.bank_code}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Bank Account</TableCell>
										<TableCell>{opened_customer.bank_account}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Bank User</TableCell>
										<TableCell>{opened_customer.bank_user}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Bank IBAN</TableCell>
										<TableCell>{opened_customer.bank_iban}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Bank BIC</TableCell>
										<TableCell>{opened_customer.bank_bic}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Bank Country Code</TableCell>
										<TableCell>{opened_customer.bank_countrycode}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Bank Currency</TableCell>
										<TableCell>{opened_customer.bank_currency}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								color="secondary"
								onClick={(e) => this.props.closeViewCustomer()}
							>
								Close
							</button>
						</DialogActions>
					</Dialog>
					<div
						style={{
							padding: "0px 90px",
						}}
					>
						<span className="header">Customer</span>
						<span className="header-buttons">
							<button
								className="button"
								variant="contained"
								onClick={(e) => this.props.openCreateCustomer()}
							>
								Create Customer
							</button>
						</span>
					</div>
					<div
						style={{
							marginTop: 30,
							padding: "0 80",
						}}
					>
						<CustomerList state={state} actions={actions} />
					</div>
				</div>
			</>
		);
	}
}

export default Customers;
