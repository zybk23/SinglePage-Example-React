import React, {useState} from 'react';
import ProductDetail from "./ProductDetail"
import {FaArrowUp,FaArrowDown} from 'react-icons/fa';

import img1 from "../Assets/Images/1.jpg"
import img2 from "../Assets/Images/2.jpg"
import img3 from "../Assets/Images/3.jpg"
import img4 from "../Assets/Images/4.jpg"


const products=[
	{
		id:1,
		img:img1,
		sku:"233-elz",
		name:"Silky Milky Piggy EGF Retinol Cream",
		group:[
			"A","B","C","D"
		],
		species:[
			"Cosmetics","Creams","Retinol","Antiage"
		],
		price:10.00,
		stok:23,
		site:20,
		barcode:"880882432343",
		brand:"Ellizavecca",
		vendor:"koreacosm.com",
		reserved:3,
		cost:4.29,
		expDate:"02/2022",
		collection:"Retinol Creams",
		country:"South Korea",
		tags:[
			"egf","retinol","creams"
		]
	},
	{
		id:2,
		img:img2,
		sku:"101-elz",
		name:"Elizavecca Gold CF-Nest 97% B-JO Serum",
		group:[
			"A","B","C","D"
		],
		species:[
			"Cosmetics","Creams","Retinol","Antiage"
		],
		price:20.00,
		stok:44,
		site:22,
		barcode:"27828722432343",
		brand:"Milks",
		vendor:"tahazeybek.com",
		reserved:23,
		cost:24.29,
		expDate:"05/2025",
		collection:"Ice Creams",
		country:"Turkey",
		tags:[
			"tghy","cold","creams"
		]
	},
	{
		id:3,
		img:img3,
		sku:"399-elz",
		name:"Elizavecca Milky Piggy EGF Retinol Cream",
		group:[
			"A","B","C","D"
		],
		species:[
			"Cosmetics","Creams","Retinol","Antiage"
		],
		price:30.00,
		stok:121,
		site:34,
		barcode:"4732783778378",
		brand:"Ulker",
		vendor:"ulker.com",
		reserved:37,
		cost:52,
		expDate:"11/2024",
		collection:"Cheese Cake",
		country:"Germany",
		tags:[
			"white","fresh","cold"
		]
	},

]

const Products = () => {

	const [check,setCheck]=useState(false)
	const [activeId,setActiveId]=useState(0)
	const handleChange=()=>{
		setCheck(!check)
	}

	const handleOpen=(id)=>{
		setActiveId(id)
	}
	return (
		<div className="products">
			<table>
				<thead>
					<tr>
						<td>#</td>
						<td></td>
						<td>SKU</td>
						<td>Name</td>
						<td>Group</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{
						products.map(item=>
							<>
								<tr onClick={()=>handleOpen(item.id)} key={item.id} className="bodytr">
									<td>
										<input type="checkbox"
											defaultChecked={check}
											onChange={handleChange}
										/>
									</td>
									<td>
										<div className="smallImage" >
											<img src={(item.img)} alt=""/>
										</div>
									</td>
									<td>
										{item.sku}
									</td>
									<td>
										{item.name}
									</td>
									<td className="group" >
										<select>
											{
												item.group.map((groupItem,index)=>
													<option key={index} value={groupItem}>{groupItem}</option>
													)
											}
										</select>
									</td>
									<td className="species">
										<select>
											{
												item.species.map((speciesItem,index)=>
												<option key={index}  value={speciesItem}>{speciesItem}</option>
													)
											}
											
										</select>
									</td>
									<td>
										$ {item.price}
									</td>
									<td>
										{item.stok}/{item.site}
									</td>
									<td>
										<FaArrowUp/>
									</td>
								</tr>
								<ProductDetail
								id={item.id}
								activeId={activeId}
								img={item.img}
								sku={item.sku}
								name={item.name}
								price={item.price}
								stok={item.stok}
								site={item.site}
								barcode={item.barcode}
								brand={item.brand}
								vendor={item.vendor}
								reserved={item.reserved}
								cost={item.cost}
								expDate={item.expDate}
								collection={item.collection}
								country={item.country}
								tags={item.tags}
								 />
							</>

						)
					}
				</tbody>				
			</table>
		</div>
	);
};

export default Products;