import React from "react";
import Button from "../Button";
import "./index.less";
import { useHistory } from "react-router-dom";


const Locker = ({
	city,
	dimension,
	price,
	rate,
	quantityInStock,
	searchTerm,
	index,
}) => {
	let history = useHistory();

	function handleClick() {
		history.push("/rent")
	}

	return (
		<tr>
			<td>
				{city} {!isEmpty(searchTerm) ? index + 1 : ""}
			</td>
			<td>{dimension}</td>
			<td>{price}</td>
			<td>{rate}</td>
			<td>{quantityInStock}</td>
			<td>
				<Button onClick={handleClick} buttonClass={"rent"}>Rent Now</Button>
			</td>
		</tr>
	);
};

function isEmpty(str) {
	return !str || 0 === str.length;
}

export default Locker;
