import React, { useState } from 'react';
import { BsFillTrashFill, BsArrowCounterclockwise } from 'react-icons/bs';

export const ConvertScreen = () => {
	const [hex, setHex] = useState('');
	const [base, setBase] = useState('');

	const hexToBase64 = (hexstring) => {
		return btoa(
			hexstring
				.match(/\w{2}/g)
				.map(function(a) {
					return String.fromCharCode(parseInt(a, 16));
				})
				.join('')
		);
	};

	const handleInputChange = (e) => {
		setHex(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setBase(hexToBase64(hex));
	};

	const handleClean = (e) => {
		e.preventDefault();
		setHex('');
		setBase('');
	};

	return (
		<div className="container my-3">
			<div className="row">
				<div className="mb-3">
					<div className="col-8 m-auto">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							HEX
						</label>
						<input
							type="text"
							className="form-control"
							id="hex"
							placeholder="Write your HEX string"
							value={hex}
							onChange={handleInputChange}
						></input>
						<div className="d-flex justify-content-center m-4">
							<button
								type="button"
								className="btn btn-outline-success mx-1"
								onClick={handleSubmit}
							>
								Convert
							</button>
							<button
								type="button"
								className="btn btn-outline-danger mx-1"
								onClick={handleClean}
								data-bs-toggle="tooltip"
								title="Clear"
							>
								<BsArrowCounterclockwise />
							</button>
						</div>
						<label htmlFor="exampleFormControlInput2" className="form-label">
							base64
						</label>
						<input
							type="text"
							className="form-control"
							id="base64"
							value={base}
							placeholder="base64 result"
							readOnly
						></input>
					</div>
				</div>
			</div>
		</div>
	);
};
