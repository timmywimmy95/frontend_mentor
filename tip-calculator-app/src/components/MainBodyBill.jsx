import { useState } from 'react';
import React from 'react';

const MainBodyBill = () => {
	const [bill, setBill] = useState(0.0);
	const [tip, setTip] = useState(0);
	const [people, setPeople] = useState(0);

	const handleBill = (e) => {
		setBill(e.target.value);
		console.log(bill);
	};
	const handleTip = (e) => {
		const tipNumber = parseInt(e.target.value.split('%'));
		console.log(tipNumber);
	};

	return (
		<>
			<div id='main-bill-container'>
				<div className='left-container'>
					<div id='bill-container'>
						<p>Bill</p>
						<div className='input-container'>
							<span>
								<img
									src='/images/icon-dollar.svg'
									alt='dollar-icon'
								/>
							</span>
							<input
								type='number'
								defaultValue={bill.toFixed(2)}
								step='0.01'
								onChange={handleBill}
								min='0'
								pattern='^\d*(\.\d{0,2})?$'
								title='Amount value up to two decimal places'
							/>
						</div>
					</div>
					<div id='tip-container'>
						<p>Select Tip %</p>
						<div className='tip-buttons-container'>
							<input
								type='button'
								value='5%'
								onClick={handleTip}
							/>
							<input
								type='button'
								value='10%'
								onClick={handleTip}
							/>
							<input
								type='button'
								value='15%'
								onClick={handleTip}
							/>
							<input
								type='button'
								value='25%'
								onClick={handleTip}
							/>
							<input
								type='button'
								value='50%'
								onClick={handleTip}
							/>
							<input
								type='text'
								value='Custom'
								onChange={handleBill}
							/>
						</div>
					</div>
					<div id='pax-container'>
						<p>Number of People</p>
						<div className='input-container'>
							<span>
								<img
									src='/images/icon-person.svg'
									alt='person-icon'
								/>
							</span>
							<input type='number' defaultValue={people} />
						</div>
					</div>
				</div>
				<div className='right-container'>
					<div className='tip-amount'>
						<p>
							Tip Amount <span> / person</span>
						</p>
						<h2>${tip}</h2>
					</div>
					<div className='total-amount'>
						<p>
							Total <span> / person</span>
						</p>
						<h2>$32.79</h2>
					</div>
					<div className='reset-button'>
						<input type='button' value='RESET' />
					</div>
				</div>
			</div>
		</>
	);
};

export default MainBodyBill;
