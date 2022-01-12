import React from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ListError } from "../error";

export const ProjectTable = ({ state, deleteProject, openEditProject, viewProject }) => {
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
						Project Name
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Customer Name
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Contact Person
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
                            textAlign: "center",
						}}
					>
						View
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						Edit
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
                            textAlign: "center",
						}}
					>
						Remove
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{state.projects.map((p) => {
					return (
						<TableRow key={p.id}>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{p.project_name}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{p.customer_name}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{p.contact_person}
							</TableCell>
							<TableCell align="right"
                            >
								<button className="edit-btn view-btn" variant="contained" onClick={(e) => viewProject(p.id)}>
									View
								</button>
							</TableCell>
							<TableCell
								style={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<button className="edit-btn" onClick={(e) => openEditProject(p.id)}>
									Edit
								</button>
							</TableCell>
							<TableCell align="right">
								{state.actions.remove_project.id === p.id &&
								state.actions.remove_project.loading ? (
									<LinearProgress />
								) : (
									<button
                                        className="edit-btn delete-btn"
										onClick={(e) => deleteProject(p.id)}
									>
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

export const ProjectList = ({ state, actions }) => {
	return state.loading ? (
		<LinearProgress />
	) : state.error !== null ? (
		<ListError error={state.error} />
	) : (
		<ProjectTable state={state} {...actions} />
	);
};
