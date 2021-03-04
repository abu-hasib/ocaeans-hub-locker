import React from "react";
import "./index.less";

const Hero = ({ onClick, children, quantity }) => (
	<>
			<div className="hero-container">
				<div className="row hero-row">
					<div className="hero-text">
						<h1>Find a Locker</h1>
						<div className="search">
							<input
								type="text"
								className="searchTerm"
								placeholder="Enter City or State"
							/>
							<div className="wrap">
								<button type="submit" className="searchButton">
									Find Locker
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="count">
				<div>Open Locker Availble</div>
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
