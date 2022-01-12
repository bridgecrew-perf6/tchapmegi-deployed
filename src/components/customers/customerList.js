import React from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ListError } from "../error";

export const CustomerTable = ({ state, deleteCustomer, viewCustomer, openEditCustomer }) => {
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
						Customer Name
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Debitor Number
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Creation Date
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
						align="right"
					>
						Remove
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{state.customers.map((t) => {
					return (
						<TableRow key={t.id}>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.customer_name}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.customer_name}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.creation_date}
							</TableCell>
							<TableCell
								style={{
									display: "flex",
									justifyContent: "center",
								}}
							>
								<button
									className="edit-btn view-btn"
									variant="contained"
									onClick={(e) => viewCustomer(t.id)}
								>
									View
								</button>
							</TableCell>
							<TableCell>
								<button
									className="edit-btn"
									variant="contained"
									color="primary"
									onClick={(e) => openEditCustomer(t.id)}
								>
									Edit
								</button>
							</TableCell>
							<TableCell>
								{state.actions.delete_customer.id === t.id &&
								state.actions.delete_customer.loading ? (
									<LinearProgress />
								) : (
									<button
										className="edit-btn delete-btn"
										variant="contained"
										color="secondary"
										onClick={(e) => deleteCustomer(t.id)}
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

export const CustomerList = ({ state, actions }) => {
	return state.loading ? (
		<LinearProgress />
	) : state.error !== null ? (
		<ListError error={state.error} />
	) : (
		<CustomerTable state={state} {...actions} />
	);
};
