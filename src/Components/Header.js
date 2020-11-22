import React from 'react';
import { FaBookOpen,FaArrowAltCircleRight } from 'react-icons/fa';

const Header = () => {
	return (
		<div className="header">
			<div className="header_title">
				Your Productivity Scroe : 88 (Good)
			</div>
			<div className="header_menu">
				<div className="header_info">
					<FaBookOpen />
					<span>Chats</span>
					<div className="header_count">
						2
					</div>
				</div>
				<div className="header_info">
					<FaArrowAltCircleRight/>
					<span>Settings</span>
				</div>
			</div>
		</div>
	);
};

export default Header;