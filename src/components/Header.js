import React from 'react';
import logo from '../resources/efebia_logo.jpg';

export const Header = () => {
	return (
		<div className="text-center my-5">
			<img src={logo} alt="Efebia" className="img-fluid"></img>
		</div>
	);
};
