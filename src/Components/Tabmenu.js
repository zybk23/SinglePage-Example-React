import React from 'react';
import {FaSearch } from 'react-icons/fa';


const Tabmenu = () => {
	return (
		<div className="tabmenu" >
			<div className="tabmenu_title">
				Inventory
			</div>
			<div className="tabmenu_menu">
				<div className="select">
					<label htmlFor="">Category:</label>
					<select>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option selected value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</div>
				<div className="select">
					<label htmlFor="">Brand:</label>
					<select>
						<option value="grapefruit">Grapefruit</option>
						<option value="lime">Lime</option>
						<option selected value="coconut">Coconut</option>
						<option value="mango">Mango</option>
					</select>
				</div>
				<div className="search">
					<FaSearch/>
					<input placeholder="Quick Search" type="text"/>
				</div>
			</div>
			<div className="tabmenu_rightside">
				+ Add product
			</div>
		</div>
	);
};

export default Tabmenu;