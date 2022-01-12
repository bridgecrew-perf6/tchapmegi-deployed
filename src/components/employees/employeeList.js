import React from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import Avatar from "@material-ui/core/Avatar";
import { ListError } from "../error";

export const EmployeeTable = ({ state, deleteEmployee, viewEmployee, openAuth, openEditEmp }) => {
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
						Avatar
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						First Name
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Last Name
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Phone
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
						Authorisation
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
				{state.employees.map((t) => {
					return (
						<TableRow key={t.id}>
							<TableCell>
								<Avatar src={t.avatar} />
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.first_name}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.last_name}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.phone}
							</TableCell>
							<TableCell
							>
								<button
									className="edit-btn view-btn"
									variant="contained"
									onClick={(e) => viewEmployee(t.id)}
								>
									View
								</button>
							</TableCell>
							<TableCell>
								<button className="edit-btn" onClick={(e) => openEditEmp(t.id)}>
									Edit
								</button>
							</TableCell>
							<TableCell>
								<button
                                    style={{
                                        fontSize: "0.75rem",
										width: "8.5rem"
                                    }}
									className="edit-btn"
									variant="contained"
									onClick={(e) => openAuth(t.id)}
								>
									Authorisation
								</button>
							</TableCell>
							<TableCell>
								{state.actions.delete_employee.id === t.id &&
								state.actions.delete_employee.loading ? (
									<LinearProgress />
								) : (
									<button
										className="edit-btn delete-btn"
										onClick={(e) => deleteEmployee(t.id)}
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

export const EmployeeList = ({ state, actions }) => {
	return state.loading ? (
		<LinearProgress />
	) : state.error !== null ? (
		<ListError error={state.error} />
	) : (
		<EmployeeTable state={state} {...actions} />
	);
};
