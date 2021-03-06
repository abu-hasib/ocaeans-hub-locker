import React from "react";
import Loading from "../Loading";
import Locker from "./Locker";
import "./index.less";
import locker from "../../images/locker.jpg";

const LockerList = ({ lockers, searchTerm }) =>
	lockers ? (
		<div className="data">
		<img className="aside" src={locker} alt="" />
		<table>
			<tbody>
				{lockers.filter(isSearched(searchTerm)).map((item, key) => (
					<Locker searchTerm={searchTerm} index={key} key={key} {...item} />
				))}
			</tbody>
		</table>
		</div>

	) : (
		<Loading />
	);

const isSearched = (searchTerm) => (item) =>
	!searchTerm ||
	item.city.toLowerCase().includes(searchTerm.toLowerCase());

export default LockerList;
