import React from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import LinearProgress from "@material-ui/core/LinearProgress";
import { ListError } from "../error";

export const ResourceTable = ({ state, deleteResource, openEditResource, viewResource }) => {
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
						RNR
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Resource Name
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Store
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						View
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Edit
					</TableCell>
					<TableCell
						style={{
							fontSize: 20,
							fontWeight: "bold",
						}}
					>
						Remove
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{state.resources.map((t) => {
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
								{t.resource_name}
							</TableCell>
							<TableCell
								style={{
									fontSize: 16,
								}}
							>
								{t.store}
							</TableCell>
							<TableCell align="left">
								<button className="edit-btn view-btn" variant="contained" onClick={(e) => viewResource(t.id)}>
									View
								</button>
							</TableCell>
							<TableCell align="left">
								<button
                                    className="edit-btn"
									variant="contained"
									color="primary"
									onClick={(e) => openEditResource(t.id)}
								>
									Edit
								</button>
							</TableCell>
							<TableCell align="left">
								{state.actions.remove_rsrc.id === t.id &&
								state.actions.remove_rsrc.loading ? (
									<LinearProgress />
								) : (
									<button
                                        className="edit-btn delete-btn"
										variant="contained"
										color="secondary"
										disabled={
											state.actions.remove_rsrc.id !== t.id &&
											state.actions.remove_rsrc.loading
										}
										onClick={(e) => deleteResource(t.id)}
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

export const ResourceList = ({ state, actions }) => {
	return state.loading ? (
		<LinearProgress />
	) : state.error !== null ? (
		<ListError error={state.error} />
	) : (
		<ResourceTable state={state} {...actions} />
	);
};
