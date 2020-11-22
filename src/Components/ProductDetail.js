import React from 'react';

const ProductDetail = (prop) => {
	return (
		<tr style={{display: prop.activeId!==prop.id && "none"}} className="productDetail">
			<td colSpan="3">
				<div className="first">
					<img src={prop.img} alt=""/>
					<span>1 of 3</span>
					<p>+ Add image</p>
				</div>
			</td>
			<td colSpan="1">
				<div className="second">
					<div className="second1">
						<div className="secondtitle">
							Display Name
						</div>
						<div className="secondsubtitle">
							{prop.name}
						</div>
					</div>
					<div className="second2">
						<div className="second2left">
							<div className="secondtitle">
								SKU
							</div>
							<div className="secondsubtitle">
								{prop.sku}
							</div>
						</div>
						<div className="second2right">
							<div className="secondtitle">
								Barcode
							</div>
							<div className="secondsubtitle">
								{prop.barcode}
							</div>
						</div>
					</div>
					<div className="second3">
						<div className="second3left">
							<div className="secondtitle">
								Brand
							</div>
							<div className="secondsubtitle">
								{prop.brand}
							</div>
						</div>
						<div className="second3right">
							<div className="secondtitle">
								Vendor
							</div>
							<div className="secondsubtitle">
								{prop.vendor}
							</div>
						</div>
					</div>
					<div className="second4">
						<div style={{marginLeft:0}} className="same">
							<div className="secondtitle">
									Stock
							</div>
							<div className="secondsubtitle">
								{prop.stok}
							</div>
						</div>
						<div className="same">
							<div className="secondtitle">
									Site
							</div>
							<div className="secondsubtitle">
								{prop.site}
							</div>
						</div>
						<div className="same">
							<div className="secondtitle">
									Reserved
							</div>
							<div style={{color:"red"}} className="secondsubtitle">
								{prop.reserved}
							</div>
						</div>
						
					</div>
				</div>
			</td>
			<td colSpan="2">
				<div className="third">
					<div className="thirdtop">
						<div className="thirdtopleft">
							<div className="secondtitle">
								Price
							</div>
							<div className="secondsubtitle">
								$ {prop.price}
							</div>
						</div>
						<div style={{color:"green"}} className="thirdtopright">
							105%
						</div>
					</div>
					<div className="thirdmiddle">
						<div className="secondtitle">
							Cost
						</div>
						<div className="secondsubtitle">
							$ {prop.cost}
						</div>
					</div>
					<div className="thirdbottom">
						<div className="thirdbottomleft">
							<div className="secondtitle">
								EXP Date
							</div>
							<div className="secondsubtitle">
								{prop.expDate}
							</div>
						</div>
						<div className="thirdbottomright">
							...
						</div>
					</div>
				</div>
			</td>
			<td colSpan="3">
				<div className="fourth">
					<div className="fourthtop">
						<div className="secondtitle">
							Colelection
						</div>
						<div className="secondsubtitle">
							{prop.collection}
						</div>
					</div>
					<div className="fourthtop">
						<div className="secondtitle">
							Country
						</div>
						<div className="secondsubtitle">
							{prop.country}
						</div>
					</div>
					<div className="fourthbottom">
						<div className="secondtitle">
							Tags
						</div>
						<div className="fourthtags">
							{
								prop.tags.map((tag,index)=><div key={index} style={{marginLeft:index===0 && 0}} className="tag">{tag}</div>)
							}
						</div>
					</div>
				</div>
			</td>
		</tr>
	);
};

export default ProductDetail;