import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const iconStyles = { color: 'black', fontSize: '20px' };

export const ContactScreen = () => {
	return (
		<div className="container mt-5">
			<div className="gx-5 text-center d-flex justify-content-center">
				<div className="col-1">
					<a
						href="https://linkedin.com/in/santiagosimoncelli"
						target="_blank"
						rel="noreferrer"
					>
						<BsLinkedin style={iconStyles} />
					</a>
				</div>
				<div className="col-1">
					<a
						href="https://github.com/simonchoxx"
						target="_blank"
						rel="noreferrer"
					>
						<BsGithub style={iconStyles} />
					</a>
				</div>
			</div>
		</div>
	);
};
