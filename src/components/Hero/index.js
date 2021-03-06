import React from "react";
import "./index.less";

const Hero = ({ onSubmit, onSearchChange, count }) => (
	<>
		<div className="hero-container">
			<div className="row hero-row">
				<div className="hero-text">
					<h1>Find a Locker</h1>
						<form onSubmit={onSubmit}>
					<div className="search">
							<input
								type="text"
								className="searchTerm"
								placeholder="Enter City or State"
								onChange={onSearchChange}
							/>
							<div className="wrap">
								<button type="submit" className="searchButton">
									Find Locker
								</button>
							</div>
					</div>
						</form>
				</div>
			</div>
		</div>
		<div className="count">
			<div> {count} Open Locker Availble</div>
			<div className="sort">
				<div>Sort By</div>
				<select>
					<option value="closest">Closest</option>
					<option value="lowest">Loowest price</option>
				</select>
			</div>
		</div>
	</>
);

export default Hero;
