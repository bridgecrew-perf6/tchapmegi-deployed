import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";
import { LoginStatusList } from "./loginStatusList";
import AuthenticatedNavbar from "./../authenticatedNavbar/AuthenticatedNavbar";
import "./../global.css";

class LoginStatus extends Component {
	componentDidMount() {
		this.props.getLoginStatus();
	}

	render() {
		let d = new Date();
		let d_month = d.getMonth() < 10 ? `0${d.getMonth() + 1}` : `${d.getMonth() + 1}`;
		let d_date = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
		let date = `${d.getFullYear()}-${d_month}-${d_date}`;
		return (
			<>
				<AuthenticatedNavbar />
				<div
					style={{
						padding: "0px 90px",
					}}
				>
					<span className="header">Login Status</span>
					<span className="header-buttons">
						<TextField
							autoFocus
							margin="dense"
							label="Select Date"
							variant="outlined"
							type="date"
							defaultValue={date}
							fullWidth
							onChange={({ target: { value } }) =>
								this.props.getLoginStatusSearch(value)
							}
						/>
					</span>
					<div
						style={{
							marginTop: 30,
							padding: "0 0",
						}}
					>
						<LoginStatusList state={this.props.state} />
					</div>
				</div>
			</>
		);
	}
}

export default LoginStatus;
