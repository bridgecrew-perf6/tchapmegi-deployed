import React from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import format from "date-fns/format";
import addHours from "date-fns/addHours";
import { ListError } from "../error";

const getEndTime = (endtime, duration) => {
	return format(addHours(new Date(endtime), duration), "dd LLL yyyy HH:mm aaaa");
};

export const WOTable = ({ state, deleteWO, viewWO, openEditWO }) => {
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
						AANR
					</TableCell>
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
						Start Time
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						End Time
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
							textAlign: "center",
						}}
						align="right"
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
						View
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
				{state.wo.map((t) => {
					return (
						<TableRow key={t.id}>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.id}
							</TableCell>
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
								{format(new Date(t.start_datetime), "dd LLL yyyy HH:mm aaaa")}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{getEndTime(t.start_datetime, t.duration)}
							</TableCell>
							<TableCell align="right">
								<button
									className="edit-btn view-btn"
									variant="contained"
									onClick={(e) => viewWO(t.id)}
								>
									View
								</button>
							</TableCell>
							<TableCell align="right">
								<button className="edit-btn" onClick={(e) => openEditWO(t.id)}>
									Edit
								</button>
							</TableCell>
							<TableCell align="right">
								{state.actions.delete_wo.id === t.id &&
								state.actions.delete_wo.loading ? (
									<LinearProgress />
								) : (
									<button className="edit-btn delete-btn" onClick={(e) => deleteWO(t.id)}>
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

export const WOList = ({ state, actions }) => {
	return state.loading ? (
		<LinearProgress />
	) : state.error !== null ? (
		<ListError error={state.error} />
	) : (
		<WOTable state={state} {...actions} />
	);
};
