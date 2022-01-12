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
import { ResourceList } from "./resourceList";
import AuthenticatedNavbar from "./../authenticatedNavbar/AuthenticatedNavbar";
import "./../global.css";

class Resources extends Component {
	componentDidMount() {
		this.props.getResources();
	}

	render() {
		let actions = {
			viewResource: this.props.viewResource,
			openEditResource: this.props.openEditResource,
			deleteResource: this.props.deleteResource,
		};

		let state = this.props.state;
		let {
			resource_name,
			valid_from,
			valid_to,
			store,
			address,
			long_name,
			group,
			business_sector,
			article,
		} = state.resource_details;
		let disabled =
			!resource_name.valid ||
			!valid_from.valid ||
			!valid_to.valid ||
			(state.actions.edit_resource.id !== null && !state.actions.edit_resource.checked);
		let view_resource_open = state.actions.view_resource.open;
		let create_resource_open = state.open;
		let opened_resource = state.actions.view_resource.resource;

		return (
			<>
				<AuthenticatedNavbar />
				<div className="container">
					{/* View Dialog */}
					<Dialog
						open={view_resource_open}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
								width: "50%",
							},
						}}
					>
						<DialogTitle style={{ fontWeight: "bold" }}>
							{opened_resource.resource_name}
						</DialogTitle>
						<DialogContent>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>RNR</TableCell>
										<TableCell>{opened_resource.id}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Valid From
										</TableCell>
										<TableCell>{opened_resource.valid_from}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Valid Till
										</TableCell>
										<TableCell>{opened_resource.valid_to}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Article
										</TableCell>
										<TableCell>{opened_resource.article}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Store</TableCell>
										<TableCell>{opened_resource.store}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Business Sector
										</TableCell>
										<TableCell>{opened_resource.business_sector}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Long Name
										</TableCell>
										<TableCell>{opened_resource.long_name}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Address
										</TableCell>
										<TableCell>{opened_resource.address}</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								color="secondary"
								onClick={(e) => this.props.closeViewResource()}
							>
								Close
							</button>
						</DialogActions>
					</Dialog>

					{/* Create Dialog */}
					<Dialog
						open={create_resource_open}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
							},
						}}
						fullWidth
					>
						<DialogTitle style={{fontWeight: "bold"}}>
							{state.actions.edit_resource.id !== null
								? "Edit Resource"
								: "Create Resource"}
						</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Resource Name"
								fullWidth
								value={resource_name.value}
								disabled={
									state.actions.create_resource.loading ||
									state.actions.edit_resource.loading
								}
								error={!resource_name.valid && resource_name.entered}
								onChange={({ target: { value } }) => this.props.addRName(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Valid From"
								type="date"
								fullWidth
								value={
									state.actions.edit_resource.id !== null
										? format(new Date(valid_from.value), "yyyy-MM-dd")
										: valid_from.value
								}
								disabled={
									state.actions.create_resource.loading ||
									state.actions.edit_resource.loading
								}
								error={!valid_from.valid && valid_from.entered}
								onChange={({ target: { value } }) => this.props.addValidFrom(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Valid From"
								type="date"
								fullWidth
								value={
									state.actions.edit_resource.id !== null
										? format(new Date(valid_to.value), "yyyy-MM-dd")
										: valid_to.value
								}
								disabled={
									state.actions.create_resource.loading ||
									state.actions.edit_resource.loading
								}
								error={!valid_to.valid && valid_to.entered}
								onChange={({ target: { value } }) => this.props.addValidTo(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Business Sector"
								fullWidth
								value={business_sector.value}
								disabled={
									state.actions.create_resource.loading ||
									state.actions.edit_resource.loading
								}
								onChange={({ target: { value } }) => this.props.addBSector(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Article"
								fullWidth
								value={article.value}
								disabled={
									state.actions.create_resource.loading ||
									state.actions.edit_resource.loading
								}
								onChange={({ target: { value } }) => this.props.addArticle(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Group"
								fullWidth
								value={group.value}
								disabled={
									state.actions.create_resource.loading ||
									state.actions.edit_resource.loading
								}
								onChange={({ target: { value } }) => this.props.addGroup(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Store"
								fullWidth
								value={store.value}
								disabled={
									state.actions.create_resource.loading ||
									state.actions.edit_resource.loading
								}
								onChange={({ target: { value } }) => this.props.addStore(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Address"
								fullWidth
								value={address.value}
								disabled={
									state.actions.create_resource.loading ||
									state.actions.edit_resource.loading
								}
								onChange={({ target: { value } }) => this.props.addAddress(value)}
							/>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Long Name"
								fullWidth
								value={long_name.value}
								disabled={
									state.actions.create_resource.loading ||
									state.actions.edit_resource.loading
								}
								onChange={({ target: { value } }) => this.props.addLongName(value)}
							/>
							{state.actions.edit_resource.id !== null ? (
								<FormControlLabel
									control={
										<Checkbox
											checked={state.actions.edit_resource.checked}
											onChange={(e) => this.props.checkPrompt()}
											color="primary"
										/>
									}
									label="I confirm to edit this resource"
								/>
							) : null}
							{state.actions.edit_resource.loading ||
							state.actions.create_resource.loading ? (
								<LinearProgress />
							) : null}
						</DialogContent>
						<DialogActions>
							<button
                                className="edit-btn"
								color="secondary"
								onClick={(e) => this.props.closeCreateResource()}
							>
								Close
							</button>
							<button
                                className={disabled ? 'edit-btn custom-disabled':'edit-btn'}
								color="primary"
								disabled={disabled}
								onClick={(e) => {
									state.actions.edit_resource.id !== null
										? this.props.editResource()
										: this.props.createResource();
								}}
							>
								{state.actions.edit_resource.id !== null ? "Edit" : "Create"}
							</button>
						</DialogActions>
					</Dialog>

					<div
						style={{
							padding: "0px 90px",
						}}
					>
						<span className="header">Resources</span>
						<span className="header-buttons">
							<button
								className="button"
								variant="contained"
								onClick={(e) => this.props.openCreateResource()}
							>
								Create Resource
							</button>
						</span>
					</div>

					<div
						style={{
							marginTop: 30,
							padding: "0 80",
						}}
					>
						<ResourceList state={this.props.state} actions={actions} />
					</div>
				</div>
			</>
		);
	}
}

export default Resources;
