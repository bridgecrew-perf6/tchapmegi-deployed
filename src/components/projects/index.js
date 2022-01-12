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
import format from "date-fns/format";
import { ProjectList } from "./projectList";
import { withStyles } from "@material-ui/styles";
import AuthenticatedNavbar from "./../authenticatedNavbar/AuthenticatedNavbar";
import "./../global.css";

class Projects extends Component {
	componentDidMount() {
		this.props.getProjects();
	}

	render() {
		let actions = {
			openEditProject: this.props.openEditProject,
			viewProject: this.props.viewProject,
			deleteProject: this.props.deleteProject,
			closeViewProject: this.props.closeViewProject,
		};
		let state = this.props.state;
		let opened_project = state.actions.view_project.project;
		let view_project_open = state.actions.view_project.open;
		let create_project_open = state.open;
		let {
			project_name,
			customer_name,
			contact_person,
			start_date,
			end_date,
			phone,
			city,
			address,
			email,
			fax,
		} = state.project_details;
		let disabled =
			!project_name.valid ||
			!customer_name.valid ||
			!contact_person.valid ||
			!start_date.valid ||
			!end_date.valid ||
			!phone.valid ||
			!city.valid ||
			!address.valid ||
			!email.valid ||
			!fax.valid ||
			(state.actions.edit_project.id !== null && !state.actions.edit_project.checked);

		return (
			<>
				<AuthenticatedNavbar />
				<div className="container">

					{/* VIEW */}
					<Dialog
						open={view_project_open}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
								width: "50%"
							},
						}}
					>
						<DialogTitle style={{fontWeight: "bold"}}>{opened_project.project_name}</DialogTitle>
						<DialogContent>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell style={{fontWeight: "bold"}}>Start Date</TableCell>
										<TableCell>{opened_project.start_date}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{fontWeight: "bold"}}>End Date</TableCell>
										<TableCell>{opened_project.end_date}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{fontWeight: "bold"}}>Customer Name</TableCell>
										<TableCell>{opened_project.customer_name}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{fontWeight: "bold"}}>Contact Person</TableCell>
										<TableCell>{opened_project.contact_person}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{fontWeight: "bold"}}>Fax</TableCell>
										<TableCell>{opened_project.fax}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{fontWeight: "bold"}}>Phone</TableCell>
										<TableCell>{opened_project.phone}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{fontWeight: "bold"}}>Email</TableCell>
										<TableCell>{opened_project.email}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{fontWeight: "bold"}}>City</TableCell>
										<TableCell>{opened_project.city}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{fontWeight: "bold"}}>Address</TableCell>
										<TableCell>{opened_project.address}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								color="secondary"
								onClick={(e) => this.props.closeViewProject()}
							>
								Close
							</button>
							<button
								className={disabled ? 'edit-btn custom-disabled':'edit-btn'}
								color="primary"
								disabled={disabled}
								onClick={(e) => {
									state.actions.edit_project.id !== null
										? this.props.editProject()
										: this.props.createProject();
								}}
							>
								{state.actions.edit_project.id !== null ? "Edit" : "Create"}
							</button>
						</DialogActions>
					</Dialog>

					{/* CREATE PROJECT */}
					<Dialog
						open={create_project_open}
						fullWidth
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
							},
						}}
					>
						<DialogTitle>Create Project</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Project Name"
								fullWidth
								value={project_name.value}
								disabled={
									state.actions.create_project.loading ||
									state.actions.edit_project.loading
								}
								error={!project_name.valid && project_name.entered}
								onChange={({ target: { value } }) =>
									this.props.addProjectName(value)
								}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Customer Name"
								fullWidth
								value={customer_name.value}
								disabled={
									state.actions.create_project.loading ||
									state.actions.edit_project.loading
								}
								error={!customer_name.valid && customer_name.entered}
								onChange={({ target: { value } }) =>
									this.props.addCustomerName(value)
								}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Contact Person"
								fullWidth
								value={contact_person.value}
								disabled={
									state.actions.create_project.loading ||
									state.actions.edit_project.loading
								}
								error={!contact_person.valid && contact_person.entered}
								onChange={({ target: { value } }) =>
									this.props.addContactPerson(value)
								}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								type="date"
								label="Start Date"
								fullWidth
								disabled={
									state.actions.create_project.loading ||
									state.actions.edit_project.loading
								}
								value={
									state.actions.edit_project.id !== null
										? format(new Date(start_date.value), "yyyy-MM-dd")
										: start_date.value
								}
								error={!start_date.valid && start_date.entered}
								onChange={({ target: { value } }) => this.props.addStartDate(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								type="date"
								label="End Date"
								fullWidth
								value={
									state.actions.edit_project.id !== null
										? format(new Date(end_date.value), "yyyy-MM-dd")
										: end_date.value
								}
								disabled={
									state.actions.create_project.loading ||
									state.actions.edit_project.loading
								}
								error={!end_date.valid && end_date.entered}
								onChange={({ target: { value } }) => this.props.addEndDate(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Fax"
								fullWidth
								value={fax.value}
								disabled={
									state.actions.create_project.loading ||
									state.actions.edit_project.loading
								}
								error={!fax.valid && fax.entered}
								onChange={({ target: { value } }) => this.props.addFax(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Phone"
								fullWidth
								value={phone.value}
								disabled={
									state.actions.create_project.loading ||
									state.actions.edit_project.loading
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
									state.actions.create_project.loading ||
									state.actions.edit_project.loading
								}
								error={!email.valid && email.entered}
								onChange={({ target: { value } }) => this.props.addEmail(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="City"
								fullWidth
								value={city.value}
								disabled={
									state.actions.create_project.loading ||
									state.actions.edit_project.loading
								}
								error={!city.valid && city.entered}
								onChange={({ target: { value } }) => this.props.addCity(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								multiline
								rows="4"
								label="Address"
								fullWidth
								value={address.value}
								disabled={
									state.actions.create_project.loading ||
									state.actions.edit_project.loading
								}
								error={!address.valid && address.entered}
								onChange={({ target: { value } }) => this.props.addAddress(value)}
							/>
							{state.actions.edit_project.id !== null ? (
								<FormControlLabel
									control={
										<Checkbox
											checked={state.actions.edit_project.checked}
											onChange={(e) => this.props.checkPrompt()}
											color="primary"
										/>
									}
									label="I confirm to edit this project"
								/>
							) : null}
							{state.actions.edit_project.loading ||
							state.actions.create_project.loading ? (
								<LinearProgress />
							) : null}
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								onClick={(e) => this.props.closeCreateProject()}
							>
								Close
							</button>
							<button
								className={disabled ? 'edit-btn custom-disabled':'edit-btn'}
								disabled={disabled}
								onClick={(e) => {
									state.actions.edit_project.id !== null
										? this.props.editProject()
										: this.props.createProject();
								}}
							>
								{state.actions.edit_project.id !== null ? "Edit" : "Create"}
							</button>
						</DialogActions>
					</Dialog>




					<div
						style={{
							padding: "0px 90px",
						}}
					>
						<span className="header">Projects</span>
						<span className="header-buttons">
							<button
								className="button"
								variant="contained"
								onClick={(e) => this.props.openCreateProject()}
							>
								Create Project
							</button>
						</span>
					</div>
					<div
						style={{
							marginTop: 30,
							padding: "0 80",
						}}
					>
						<ProjectList state={this.props.state} actions={actions} />
					</div>
				</div>
			</>
		);
	}
}

export default Projects;
