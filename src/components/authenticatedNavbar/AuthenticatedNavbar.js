import React, { useState } from "react";
import { logout } from "../../lib/api";
import "./authenticatedNavbar.css";
export default function AuthenticatedNavbar() {
	const [openMobileNav, setOpenMobileNav] = useState(false);
	return (
		<nav className="nav">

			<div
				className={`navfull__list  ${openMobileNav ? "active" : ""}`}
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<ul
					style={{
						display: "flex",
						justifyContent: "flex-end",
					}}
				>
					<li className="li-style-none mlr-nav">
						<a href="/#">
							<img
								src="/images/tchapmeji.png"
								alt="loho"
								width="250"
							/>
						</a>
					</li>
				</ul>

				<ul
					style={{
						display: "flex",
						justifyContent: "flex-end",
					}}
				>
					<li className="li-style-none mlr-nav" style={{maxHeight: "2rem", paddingTop: 20, border: "none"}}>
						<a href="/#">
							<i className="fas fa-home"></i>
						</a>
					</li>				
					<li className="li-style-none">
						<a onClick={logout} className="button" style={{
							fontSize: "0.8rem",
							width: "8rem",
							height: "2.2rem"
						}}>
							Logout
						</a>
					</li>
				</ul>
			</div>

			<div className="mobileNav">
				<button>
					<i className="fas fa-home"></i>
				</button>
				<button>
					<i className="fas fa-cog"></i>
				</button>
				<button
					className={`navToggler ${openMobileNav ? "active" : ""}`}
					onClick={() => setOpenMobileNav(!openMobileNav)}
				>
					<i className="fas fa-bars"></i>
					<i className="fas fa-times"></i>
				</button>
			</div>
		</nav>
	);
}
