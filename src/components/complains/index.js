import React, { Fragment, Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Select from "@material-ui/core/Select";
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
import { ComplainList } from "./complainList";
import { CMap } from "./map";
import { CategoryAnalysis } from "./categoryAnalysis";
import { SentimentAnalysis } from "./sentiment";
import AuthenticatedNavbar from "./../authenticatedNavbar/AuthenticatedNavbar";
import "./../global.css";

class Complains extends Component {
	componentDidMount() {
		this.props.getComplains();
		this.props.getMap();
		this.props.getCAnalysis();
		this.props.getCategories();
	}

	changeView(state, actions) {
		let view = state.active_view;
		if (view === "list") {
			return <ComplainList state={state} actions={actions} />;
		} else if (view === "map") {
			return <CMap state={state.map} />;
		} else if (view === "category") {
			return <CategoryAnalysis state={state.actions.canalysis} />;
		} else return null;
	}

	render() {
		let actions = {
			deleteComplain: this.props.deleteComplain,
			viewComplain: this.props.viewComplain,
		};

		let state = this.props.state;
		let create_cat = state.actions.cat;
		let complain = state.actions.change_status.complain;
		let change_status = state.actions.change_status;
		return (
			<>
				<AuthenticatedNavbar />

				<div className="container">
					{/* CREATE COMPLAIN */}
					<Dialog
						open={create_cat.open}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
							},
						}}
					>
						<DialogTitle style={{ fontWeight: "bold" }}>
							Create Complain Category
						</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								variant="outlined"
								label="Debitor Name"
								fullWidth
								value={create_cat.cat}
								disabled={create_cat.loading}
								error={create_cat.cat.length == 0}
								onChange={({ target: { value } }) => this.props.addCat(value)}
							/>
							{create_cat.loading ? <LinearProgress /> : null}
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								onClick={(e) => this.props.closeCreateCat()}
							>
								Close
							</button>
							<button
								color="primary"
								className={
									create_cat.cat.length == 0
										? "edit-btn custom-disabled"
										: "edit-btn"
								}
								disabled={create_cat.cat.length == 0}
								onClick={(e) => this.props.createCat()}
							>
								Create
							</button>
						</DialogActions>
					</Dialog>

					{/* CHANGE STATUS */}
					<Dialog
						open={change_status.open}
						PaperProps={{
							style: {
								borderRadius: 20,
								padding: "20px 10px",
							},
						}}
					>
						<DialogTitle style={{ fontWeight: "bold" }}>Change Status</DialogTitle>
						<DialogContent>
							<Table>
								<TableBody>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>
											Complain
										</TableCell>
										<TableCell>{complain.description}</TableCell>
									</TableRow>
									<TableRow>
										<TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
										<TableCell>
											<FormControl variant="outlined">
												<Select
													value={complain.status_id}
													disabled={change_status.loading}
													onChange={(e) =>
														this.props.modifyStatus(e.target.value)
													}
												>
													<MenuItem value={1}>Unresolved</MenuItem>
													<MenuItem value={2}>In-process</MenuItem>
													<MenuItem value={3}>Resolved</MenuItem>
												</Select>
											</FormControl>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
							{change_status.loading ? <LinearProgress /> : null}
						</DialogContent>
						<DialogActions>
							<button
								className="edit-btn"
								color="secondary"
								onClick={(e) => this.props.closeViewComplain()}
							>
								Close
							</button>
							<button
								className="edit-btn"
								color="primary"
								onClick={(e) => this.props.changeStatus()}
							>
								Change Status
							</button>
						</DialogActions>
					</Dialog>

					<div
						style={{
							padding: "0px 90px",
						}}
					>
						<span className="header">Complains</span>
						<span className="header-buttons">
							<button
								className="button"
								variant="contained"
								onClick={(e) => this.props.openCreateCat()}
							>
								Create Category
							</button>
						</span>
					</div>

					<div
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: 40,
							marginBottom: 20,
						}}
					>
						<ButtonGroup color="primary" aria-label="text primary button group">
							<button
								className="edit-btn"
								style={{
									width: 150,
									background:
										this.props.state.active_view === "list"
											? "#ec712e"
											: "#fff",
									color:
										this.props.state.active_view === "list"
											? "#fff"
											: "#ec712e",
								}}
								color={this.props.state.active_view === "list" ? "secondary" : null}
								onClick={(e) => this.props.changeView("list")}
							>
								Complain List
							</button>
							<button
								className="edit-btn"
								style={{
									width: 150,
									background:
										this.props.state.active_view === "category"
											? "#ec712e"
											: "#fff",
									color:
										this.props.state.active_view === "category"
											? "#fff"
											: "#ec712e",
								}}
								color={
									this.props.state.active_view === "category" ? "secondary" : null
								}
								onClick={(e) => this.props.changeView("category")}
							>
								Category Analysis
							</button>
							<button
								className="edit-btn"
								style={{
									width: 150,
									background:
										this.props.state.active_view === "map"
											? "#ec712e"
											: "#fff",
									color:
										this.props.state.active_view === "map"
											? "#fff"
											: "#ec712e",
								}}
								color={this.props.state.active_view === "map" ? "secondary" : null}
								onClick={(e) => this.props.changeView("map")}
							>
								Complain Map
							</button>
						</ButtonGroup>
					</div>
					<div
						style={{
							marginTop: 30,
							padding: "0 80",
						}}
					>
						{this.changeView(this.props.state, actions)}
					</div>
				</div>
			</>
		);
	}
}

export default Complains;
