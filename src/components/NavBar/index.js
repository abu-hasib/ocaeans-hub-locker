import React from "react";
import "./index.less";
import Button from "../Button";
import logo from "../../images/logo.png"

function AppBar() {
	const navItems = [
		"Home",
		"Find a Locker",
		"Size Guide",
		"Locations",
		"Help Center",
	];

	return (
		<nav className="navbar">
			<div className="logo">
				<img src={logo} alt="" srcSet="" />
			</div>
			<ul className="nav">
				<li>
					<a href="">My Account</a>
				</li>
				<li>
					<a href="">080-188-0872</a>
				</li>
				<li>
					<Button buttonClass={"bill"}>{"Pay your bill".toUpperCase()}</Button>
				</li>
			</ul>
			<ul className="nav">
				{navItems.map((item, key) => (
					<li key={key}>
						<a href="">{item}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default AppBar;
