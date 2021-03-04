import React from "react";
import Button from "../Button";
import "./index.less"

const Locker = ({ city, dimension, price, rate, quantityInStock, searchTerm, index }) => (
	<tr>
		<td>{city} {!isEmpty(searchTerm) ? index + 1 : ""}</td>
		<td>{dimension}</td>
		<td>{price}</td>
		<td>{rate}</td>
		<td>{quantityInStock}</td>
		<td>
			<Button>Rent Now</Button>
		</td>
	</tr>
);

function isEmpty(str) {
  return (!str || 0 === str.length);
}

export default Locker;
