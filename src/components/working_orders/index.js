import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import LinearProgress from "@material-ui/core/LinearProgress";
import format from "date-fns/format";
import { WOList } from "./woList";
import AuthenticatedNavbar from "./../authenticatedNavbar/AuthenticatedNavbar";
import "./../global.css";

const parseValue = (key, value) => {
	switch (key) {
		case "start_datetime":
			return format(new Date(value), "dd LLL yyyy HH:mm aaaa");
		case "duration":
			return `${value} hrs`;
		default:
			return value;
	}
};

const parseKey = (key) => {
	switch (key) {
		case "id":
			return "AANR";
		case "status":
			return "Status";
		case "customer":
			return "Customer";
		case "invoicing":
			return "Invoicing Period";
		case "project":
			return "Project";
		case "start_datetime":
			return "Start Date-Time";
		case "duration":
			return "Duration";
		case "task":
			return "Task";
		case "title":
			return "Title";
		case "user":
			return "User";
		case "team":
			return "Team Name";
		case "team_size":
			return "Team Size";
		default:
			return key;
	}
};

const getType = (key) => {
	switch (key) {
		case "start_datetime":
			return "datetime-local";
		case "duration":
			return "number";
		case "team_size":
			return "number";
		default:
			return "text";
	}
};

class WO extends Component {
	componentDidMount() {
		this.props.getCustomers();
		this.props.getEmployees();
		this.props.getTasks();
		this.props.getProjects();
		this.props.getWO();
	}

	render() {
		let actions = {
			deleteWO: this.props.deleteWO,
			viewWO: this.props.viewWO,
			openEditWO: this.props.openEditWO,
		};
		let state = this.props.state;
		let view_wo = state.actions.view_wo.open;
		let opened_wo = state.actions.view_wo.wo;
		let create_wo = state.open;
		let woobj = state.wo_details;
		let { start_datetime, duration, title, customer, project, task, user } = woobj;

		let disabled =
			!start_datetime.valid ||
			!duration.valid ||
			!title.valid ||
			!project.valid ||
			!task.valid ||
			!user ||
			(state.actions.edit_wo.id !== null && !state.actions.edit_wo.checked);

		return (
			<>
				<AuthenticatedNavbar />
				<div className="container">

					{/* VIEW MODAL */}
					<Dialog
						open={view_wo}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
								width: "100%",
							},
						}}
					>
						<DialogTitle style={{ fontWeight: "bold" }}>View Working Order</DialogTitle>
						<DialogContent>
							<Table>
								<TableBody>
									{Object.keys(opened_wo).map((key, index) => {
										return (
											<TableRow key={index}>
												<TableCell style={{ fontWeight: "bold" }}>
													{parseKey(key)}
												</TableCell>
												<TableCell>
													{parseValue(key, opened_wo[key])}
												</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								color="secondary"
								onClick={(e) => this.props.closeWO()}
							>
								Close
							</button>
						</DialogActions>
					</Dialog>


					{/* CREATE MODAL */}
					<Dialog
						open={create_wo}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "10px 5px",
							},
						}}
					>
						<DialogTitle style={{fontWeight: "bold"}}>Create</DialogTitle>
						<DialogContent>
							<FormControl variant="outlined" size="small">
								<InputLabel id="demo-simple-select-outlined-label">
									Customer
								</InputLabel>
								<Select
									style={{ minWidth: "530px", marginBottom: 10 }}
									id="demo-simple-select-outlined"
									value={state.wo_details.customer.value}
									label="Customer"
									onChange={(e) => this.props.addInfo("customer", e.target.value)}
								>
									<MenuItem value="all">All</MenuItem>
									{this.props.cust.map((c) => {
										return (
											<MenuItem value={c.id} key={c.id}>
												{c.customer_name}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
							<FormControl variant="outlined" size="small">
								<InputLabel id="demo-simple-select-outlined-label">User</InputLabel>
								<Select
									style={{ minWidth: "530px", marginBottom: 10 }}
									id="demo-simple-select-outlined"
									value={state.wo_details.user.value}
									label="User"
									onChange={(e) => this.props.addInfo("user", e.target.value)}
								>
									{this.props.emp.map((c) => {
										return (
											<MenuItem value={c.id} key={c.id}>
												{c.first_name} {c.last_name}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
							<FormControl variant="outlined" size="small">
								<InputLabel id="demo-simple-select-outlined-label">
									Project
								</InputLabel>
								<Select
									style={{ minWidth: "530px", marginBottom: 10 }}
									id="demo-simple-select-outlined"
									value={state.wo_details.project.value}
									label="Project"
									onChange={(e) => this.props.addInfo("project", e.target.value)}
								>
									{this.props.proj.map((c) => {
										return (
											<MenuItem value={c.id} key={c.id}>
												{c.project_name}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
							<FormControl variant="outlined" size="small">
								<InputLabel id="demo-simple-select-outlined-label">Task</InputLabel>
								<Select
									style={{ minWidth: "530px", marginBottom: 10 }}
									id="demo-simple-select-outlined"
									value={state.wo_details.task.value}
									label="Task"
									onChange={(e) => this.props.addInfo("task", e.target.value)}
								>
									{this.props.tasks.map((c) => {
										return (
											<MenuItem value={c.id} key={c.id}>
												{c.name}
											</MenuItem>
										);
									})}
								</Select>
							</FormControl>
							<FormControl variant="outlined" size="small">
								<InputLabel id="demo-simple-select-outlined-label">
									Status
								</InputLabel>
								<Select
									style={{ minWidth: "530px", marginBottom: 10 }}
									id="demo-simple-select-outlined"
									value={state.wo_details.status.value}
									label="Status"
									onChange={(e) => this.props.addInfo("status", e.target.value)}
								>
									<MenuItem value="active">Active</MenuItem>
									<MenuItem value="completed">Completed</MenuItem>
								</Select>
							</FormControl>
							{Object.keys(woobj).map((key, index) => {
								if (
									key !== "customer" &&
									key !== "project" &&
									key !== "task" &&
									key !== "user" &&
									key !== "status" &&
									key !== "user_name"
								) {
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
												state.actions.create_wo.loading ||
												state.actions.edit_wo.loading
											}
											value={
												getType(key) === "datetime-local" &&
												state.actions.edit_wo.id !== null
													? format(
															new Date(woobj[key].value),
															"yyyy-MM-dd'T'hh:mm"
													  )
													: woobj[key].value
											}
											error={!woobj[key].valid && woobj[key].entered}
											onChange={({ target: { value } }) =>
												this.props.addInfo(key, value)
											}
										/>
									);
								}
							})}
							{state.actions.edit_wo.loading || state.actions.create_wo.loading ? (
								<LinearProgress />
							) : null}
							{state.actions.edit_wo.id !== null ? (
								<FormControlLabel
									control={
										<Checkbox
											checked={state.actions.edit_wo.checked}
											onChange={(e) => this.props.checkPrompt()}
											color="primary"
										/>
									}
									label="I confirm to edit this working order"
								/>
							) : null}
						</DialogContent>
						<DialogActions>
							<button className="edit-btn" color="secondary" onClick={(e) => this.props.closeCreateWO()}>
								Close
							</button>
							<button
								className={disabled ? 'edit-btn custom-disabled':'edit-btn'}
								color="primary"
								disabled={disabled}
								onClick={(e) => {
									state.actions.edit_wo.id !== null
										? this.props.editWO()
										: this.props.createWO();
								}}
							>
								{state.actions.edit_wo.id !== null ? "Edit" : "Create"}
							</button>
						</DialogActions>
					</Dialog>
					<div
						style={{
							padding: "0px 90px",
						}}
					>
						<span className="header">Working Orders (Web)</span>
						<span className="header-buttons">
							<button className="button" onClick={(e) => this.props.openCreateWO()}>
								Create WO
							</button>
						</span>
					</div>
					<div
						style={{
							marginTop: 30,
							padding: "0 80",
						}}
					>
						<WOList state={this.props.state} actions={actions} />
					</div>
				</div>
			</>
		);
	}
}

export default WO;
