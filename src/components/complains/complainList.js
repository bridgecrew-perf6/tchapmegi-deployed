import React from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ListError } from "../error";

export const ComplainTable = ({ state, deleteComplain, viewComplain }) => {
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
						Title
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						People Affected
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Facing Since
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Category
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Status
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						View/Change
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
				{state.complains.map((t) => {
					return (
						<TableRow key={t.id}>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.title}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.people}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.days}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.category}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.status}
							</TableCell>
							<TableCell>
								<button className="edit-btn view-btn" style={{									
									width: "8.25rem",
								}} onClick={(e) => viewComplain(t.id)}>
									View/Change
								</button>
							</TableCell>
							<TableCell>
								{state.actions.delete_complain.id === t.id &&
								state.actions.delete_complain.loading ? (
									<LinearProgress />
								) : (
									<button
										className="edit-btn delete-btn"
										onClick={(e) => deleteComplain(t.id)}
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

export const ComplainList = ({ state, actions }) => {
	return state.loading ? (
		<LinearProgress />
	) : state.error !== null ? (
		<ListError error={state.error} />
	) : (
		<ComplainTable state={state} {...actions} />
	);
};
