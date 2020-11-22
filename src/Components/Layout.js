import React from 'react';
import Header from "./Header"
import Tabmenu from "./Tabmenu"
import Sidebar from "./Sidebar"
import Products from "./Products"

import "./styles.scss"

const Layout = () => {
	return (
		<div className="container">
			<div className="left">
				<Header/>
				<Tabmenu/>
				<Products/>
			</div>
			<Sidebar/>
		</div>
	);
};

export default Layout;