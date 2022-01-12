import React from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ListError } from "../error";

export const TaskTable = ({ state, openEditTask, deleteTask }) => {
	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Task
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Name
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Description
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
						align="center"
					>
						Edit
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
						align="center"
					>
						Remove
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{state.tasks.map((t) => {
					return (
						<TableRow key={t.id}>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.task}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.name}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.description}
							</TableCell>
							<TableCell
								style={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<button
									className="edit-btn"
									disabled={
										state.actions.delete_task.id === t.id &&
										state.actions.delete_task.loading.id
									}
									onClick={(e) => openEditTask(t.id)}
								>
									Edit
								</button>
							</TableCell>
							<TableCell>
								{state.actions.delete_task.id === t.id &&
								state.actions.delete_task.loading ? (
									<LinearProgress />
								) : (                                    
									<button style={{marginLeft: "60px"}} className="edit-btn delete-btn" onClick={(e) => deleteTask(t.id)}>
										Remove
									</button>
								)}
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
};

export const TaskList = ({ state, actions }) => {
	return state.loading ? (
		<LinearProgress />
	) : state.error !== null ? (
		<ListError error={state.error} />
	) : (
		<TaskTable state={state} {...actions} />
	);
};
