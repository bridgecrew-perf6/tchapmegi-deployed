import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LinearProgress from "@material-ui/core/LinearProgress";
import { TaskList } from "./taskList";
import AuthenticatedNavbar from "./../authenticatedNavbar/AuthenticatedNavbar";
import "./../global.css";

class Tasks extends Component {
	componentDidMount() {
		this.props.getTasks();
	}

	render() {
		let actions = {
			deleteTask: this.props.deleteTask,
			openEditTask: this.props.openEditTask,
		};

		let state = this.props.state;
		let task = state.task_details.task;
		let name = state.task_details.name;
		let description = state.task_details.description;
		let disabled =
			!task.valid ||
			!name.valid ||
			!description.valid ||
			(state.actions.edit_task.id !== null && !state.actions.edit_task.checked);

		return (
			<>
				<AuthenticatedNavbar />
				<div className="container">
					{/* EDIT */}
					<Dialog
						open={this.props.state.open}
						aria-labelledby="form-dialog-title"
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
							},
						}}
					>
						<DialogTitle id="form-dialog-title" style={{fontWeight: "bold"}}>
							{state.actions.edit_task.id !== null ? "Edit Task" : "Create Task"}
						</DialogTitle>
						<DialogContent>
							<TextField								
								autoFocus
								margin="dense"
								variant="outlined"
								id="name"
								label="Task"
								fullWidth
								value={task.value}
								disabled={state.actions.create_task.loading}
								error={
									state.task_details.task.entered &&
									!state.task_details.task.valid
								}
								onChange={({ target: { value } }) => this.props.addTask(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								id="name"
								label="Name"
								fullWidth
								value={name.value}
								disabled={state.actions.create_task.loading}
								error={
									state.task_details.name.entered &&
									!state.task_details.name.valid
								}
								onChange={({ target: { value } }) => this.props.addName(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								multiline
								rows="4"
								id="name"
								label="Description"
								fullWidth
								value={description.value}
								disabled={state.actions.create_task.loading}
								error={
									state.task_details.description.entered &&
									!state.task_details.description.valid
								}
								onChange={({ target: { value } }) =>
									this.props.addDescription(value)
								}
							/>
							{state.actions.edit_task.id !== null ? (
								<FormControlLabel
									control={
										<Checkbox
											checked={state.actions.edit_task.checked}
											onChange={(e) => this.props.checkPrompt()}
											color="primary"
										/>
									}
									label="I confirm to edit this task"
								/>
							) : null}
							{state.actions.edit_task.loading ||
							state.actions.create_task.loading ? (
								<LinearProgress />
							) : null}
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								color="secondary"
								onClick={(e) => this.props.closeCreateTask()}
							>
								Cancel
							</button>
							<button
								color="primary"
								className={disabled ? "edit-btn custom-disabled" : "edit-btn"}
								disabled={disabled}
								onClick={(e) => {
									state.actions.edit_task.id !== null
										? this.props.editTask()
										: this.props.createTask();
								}}
							>
								{state.actions.edit_task.id !== null ? "Edit" : "Create"}
							</button>
						</DialogActions>
					</Dialog>
					<div
						style={{
							padding: "0px 90px",
						}}
					>
						<span className="header">Tasks</span>
						<span className="header-buttons">
							<button className="button" onClick={(e) => this.props.openCreateTask()}>
								Create Task
							</button>
						</span>
					</div>
					<div
						style={{
							marginTop: 30,
							padding: "0 80",
						}}
					>
						<TaskList state={this.props.state} actions={actions} />
					</div>
				</div>
			</>
		);
	}
}

export default Tasks;
