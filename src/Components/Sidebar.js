import React from 'react';
import {FaUser} from 'react-icons/fa';

import img1 from "../Assets/Images/1.jpg"
import img2 from "../Assets/Images/2.jpg"
import img3 from "../Assets/Images/3.jpg"
import img4 from "../Assets/Images/4.jpg"
import img5 from "../Assets/Images/5.jpg"
import img6 from "../Assets/Images/6.jpg"


const images=[
	{
		id:1,
		img:img1,
		name:"Ellizevecca Miky Piggy Galactionus 97%",
		viewToday:22,
		viewWeek:349
	},
	{
		id:2,
		img:img2,
		name:"Ellizevecca Miky Gold Galactionus 97%",
		viewToday:1,
		viewWeek:3
	},
	{
		id:3,
		img:img3,
		name:"Miky Piggy Galactionus 97%",
		viewToday:24,
		viewWeek:349
	},
	{
		id:4,
		img:img4,
		name:"Ellizevecca Miky Piggy Galactionus 97%",
		viewToday:232,
		viewWeek:3489
	},
	{
		id:5,
		img:img5,
		name:"Piggy Galactionus Ellizevecca Miky  97%",
		viewToday:77,
		viewWeek:3412
	},
	{
		id:6,
		img:img6,
		name:"Silky Miky Piggy Galactionus 97%",
		viewToday:852,
		viewWeek:452
	},
]

const Sidebar = () => {
	return (
		<div className="right">
			<div className="right_top">
					<div className="header_info">
						<FaUser/>
						<span>Acoount</span>
					</div>
					<div className="overview">
						OVERVIEW
					</div>
					<div className="right_info">
						<span>
							SKU Total
						</span>
						<div className="count">
							12,039
						</div>
					</div>
					<div className="right_info">
						<span>
							Products Reserved
						</span>
						<div className="count">
							234
						</div>
					</div>
					<div className="right_info">
						<span>
							Stock Issues
						</span>
						<div className="count">
							2
						</div>
					</div>

				</div>
			<div className="right_bottom">
				{
					images.map(
						(item,index)=>
						<div className="image" >
							<img src={item.img} alt=""/>
						</div>
					)
				}
			</div>
		</div>
	);
};

export default Sidebar;