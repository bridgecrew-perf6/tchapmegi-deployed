import React, { Component } from "react";
import { DWorkList } from "./dworkList";
import AuthenticatedNavbar from "./../authenticatedNavbar/AuthenticatedNavbar";
import "./../global.css";

class DWork extends Component {
	componentDidMount() {
		this.props.getEmployees();
		this.props.getWO();
	}
	render() {
		function myFunc(total, num) {
			return total + num;
		}
		let wo = this.props.wo;
		let emp = this.props.emp;
		let emp_map = wo.map((t) => {
			return t.user;
		});
		let uemp = [...new Set(emp_map)];
		let empdetails = uemp.map((t) => {
			let user = emp.filter((i) => {
				return t === i.id;
			})[0];
			let wo_list = wo.filter((w) => {
				return w.user === t;
			});
			let wos = wo_list.map((w) => {
				return { start_time: w.start_datetime, duration: w.duration };
			});
			let duration = wo_list
				.map((m) => {
					return m.duration;
				})
				.reduce(myFunc);
			return {
				id: t,
				name: `${user?.first_name} ${user?.last_name}`,
				duration,
				wos,
			};
		});
		return (
			<>
				<AuthenticatedNavbar />
				<div className="container">
					<div
						style={{
							padding: "0px 90px",
						}}
					>
						<span className="header">Daily Work</span>
					</div>
					<div
						style={{
							marginTop: 30,
							padding: "0 80",
						}}
					>
						<DWorkList
							state={empdetails}
							load1={this.props.load1}
							load2={this.props.load2}
						/>
					</div>
				</div>
			</>
		);
	}
}

export default DWork;
