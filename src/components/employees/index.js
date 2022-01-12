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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LinearProgress from "@material-ui/core/LinearProgress";
import Avatar from "@material-ui/core/Avatar";
import { EmployeeList } from "./employeeList";
import format from "date-fns/format";
import AuthenticatedNavbar from "./../authenticatedNavbar/AuthenticatedNavbar";
import "./../global.css";

const getType = (key) => {
	switch (key) {
		case "bank_code":
		case "wage_index":
			return "number";
			break;
		case "valid_from":
		case "valid_to":
		case "date_of_birth":
			return "date";
			break;
		default:
			return "text";
	}
};

class Employees extends Component {
	componentDidMount() {
		this.props.getEmployees();
		this.props.authEmployee();
	}
	render() {
		let actions = {
			deleteEmployee: this.props.deleteEmployee,
			openAuth: this.props.openAuth,
			openEditEmp: this.props.openEditEmp,
			viewEmployee: this.props.viewEmployee,
		};
		let state = this.props.state;
		let view_employee_open = state.actions.view_employee.open;
		let employee = state.actions.view_employee.employee;
		let empd = state.employee_details;
		let view_auth = state.actions.auth.open;
		let open_create = state.open;
		let open_auth = state.actions.auth.emp;
		let fileInput = HTMLInputElement;
		let { first_name, last_name, phone, date_of_birth, avatar } = empd;

		let disabled =
			!first_name.valid ||
			!last_name.valid ||
			!phone.valid ||
			!date_of_birth ||
			!avatar.valid ||
			(state.actions.edit_emp.id !== null && !state.actions.edit_emp.checked);

		const handleFileUpload = (event) => {
			const { target } = event;
			const { files } = target;
			const fileURL = window.URL.createObjectURL(files[0]);
			this.props.addInfo("avatar", fileURL);
		};

		return (
			<>
				<AuthenticatedNavbar />
				<div className="container">
					{/* VIEW EMP */}
					<Dialog
						open={view_employee_open}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
								width: "50%",
							},
						}}
					>
						<DialogTitle style={{ fontWeight: "bold" }}>
							{employee.first_name} {employee.last_name}
						</DialogTitle>
						<DialogContent>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Avatar</TableCell>
										<TableCell>
											<img src={employee.avatar} width={100} />
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Valid From
										</TableCell>
										<TableCell>{employee.valid_from}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Valid To
										</TableCell>
										<TableCell>{employee.valid_to}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Gender</TableCell>
										<TableCell>{employee.gender}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Profession
										</TableCell>
										<TableCell>{employee.patliputra}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Bank</TableCell>
										<TableCell>{employee.bank}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Bank Code
										</TableCell>
										<TableCell>{employee.bank_code}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Phone</TableCell>
										<TableCell>{employee.phone}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Currency
										</TableCell>
										<TableCell>{employee.currency}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Wage Index
										</TableCell>
										<TableCell>{employee.wage_index}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Nationality
										</TableCell>
										<TableCell>{employee.nationality}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Date Of Birth
										</TableCell>
										<TableCell>{employee.date_of_birth}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Address
										</TableCell>
										<TableCell>{employee.address}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Location
										</TableCell>
										<TableCell>{employee.location}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Comments
										</TableCell>
										<TableCell>{employee.comments}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								color="secondary"
								onClick={(e) => this.props.closeViewEmployee()}
							>
								Close
							</button>
						</DialogActions>
					</Dialog>

					{/* AUTH */}
					<Dialog
						open={view_auth}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
								width: "50%",
							},
						}}
					>
						<DialogTitle style={{ fontWeight: "bold" }}>Authorisation</DialogTitle>
						<DialogContent>
							<Table>
								<TableBody>
									{Object.keys(open_auth).map((key, index) => {
										if (index !== 0) {
											return (
												<TableRow key={index}>
													<TableCell style={{ fontWeight: "bold" }}>
														{key}
													</TableCell>
													<TableCell>
														<FormControl variant="outlined">
															<InputLabel id="demo-simple-select-outlined-label">
																Age
															</InputLabel>
															<Select
																value={open_auth[key]}
																label="Option"
																onChange={(e) =>
																	this.props.changeAuth(
																		key,
																		e.target.value
																	)
																}
															>
																<MenuItem value={true}>
																	True
																</MenuItem>
																<MenuItem value={false}>
																	False
																</MenuItem>
															</Select>
														</FormControl>
													</TableCell>
												</TableRow>
											);
										}
									})}
								</TableBody>
							</Table>
							{state.actions.auth.loading ? <LinearProgress /> : null}
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								color="secondary"
								onClick={(e) => this.props.closeAuth()}
							>
								Close
							</button>
							<button
								className="edit-btn"
								color="primary"
								onClick={(e) => this.props.authUpdate()}
							>
								Update
							</button>
						</DialogActions>
					</Dialog>

					{/* CREATE */}
					<Dialog
						open={open_create}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
							},
						}}
					>
						<DialogTitle style={{ fontWeight: "bold" }}>
							{state.actions.edit_emp.id !== null ? "Edit" : "Create"}
						</DialogTitle>
						<DialogContent>
							<input
								hidden
								ref={(element) => (fileInput = element)}
								type="file"
								accept=".jpg,.png"
								onChange={(e) => handleFileUpload(e)}
							/>
							{state.actions.edit_emp.id !== null ? null : (
								<Button variant="contained" color="primary" onClick={() => fileInput.click()}>
									Upload Avatar
								</Button>
							)}
							{state.actions.edit_emp.id === null &&
							state.employee_details.avatar.value.length > 0 ? (
								<b>File Received</b>
							) : null}
							{Object.keys(empd).map((key, index) => {
								if (key !== "avatar") {
									return (
										<TextField
											key={index}
											autoFocus
											margin="dense"
											variant="outlined"
											type={getType(key)}
											label={key}
											fullWidth
											disabled={
												state.actions.create_emp.loading ||
												state.actions.edit_emp.loading
											}
											value={
												getType(key) === "date" &&
												state.actions.edit_emp.id !== null
													? format(
															new Date(empd[key].value),
															"yyyy-MM-dd"
													  )
													: empd[key].value
											}
											error={!empd[key].valid && empd[key].entered}
											onChange={({ target: { value } }) =>
												this.props.addInfo(key, value)
											}
										/>
									);
								}
							})}
							{state.actions.edit_emp.loading || state.actions.create_emp.loading ? (
								<LinearProgress />
							) : null}
							{state.actions.edit_emp.id !== null ? (
								<FormControlLabel
									control={
										<Checkbox
											checked={state.actions.edit_emp.checked}
											onChange={(e) => this.props.checkPrompt()}
											color="primary"
										/>
									}
									label="I confirm to edit this employee"
								/>
							) : null}
						</DialogContent>
						<DialogActions>
							<button className="edit-btn" color="secondary" onClick={(e) => this.props.closeCreateEmp()}>
								Close
							</button>
							<button
								className={disabled ? "edit-btn custom-disabled" : "edit-btn"}
								color="primary"
								disabled={disabled}
								onClick={(e) => {
									state.actions.edit_emp.id !== null
										? this.props.editEmp()
										: this.props.createEmp();
								}}
							>
								{state.actions.edit_emp.id !== null ? "Edit" : "Create"}
							</button>
						</DialogActions>
					</Dialog>

					<div
						style={{
							padding: "0px 90px",
						}}
					>
						<span className="header">Employee</span>
						<span className="header-buttons">
							<button className="button" onClick={(e) => this.props.openCreateEmp()}>
								Create Employee
							</button>
						</span>
					</div>
					<div
						style={{
							marginTop: 30,
							padding: "0 80",
						}}
					>
						<EmployeeList state={this.props.state} actions={actions} />
					</div>
				</div>
			</>
		);
	}
}

export default Employees;
