import React from 'react';
import { useState, useRef, useMemo } from 'react';
import useRenderCount from '../hooks/useRenderCount';

const MainBodyBill = () => {
	const renderCount = useRenderCount();
	const billRef = useRef(0.0);
	const tipRef = useRef(0);
	const totalTipRef = useRef(0);
	const [people, setPeople] = useState(0);
	const [eachPax, setEachPax] = useState(0.0);

	const handleBill = (e) => {
		billRef.current = e.target.value;
		console.log(billRef.current);
	};
	const handleTip = (e) => {
		tipRef.current = parseInt(e.target.value.split('%'));
		totalTipRef.current = (tipRef.current / 100) * billRef.current;
		console.log(tipRef.current);
	};

	const handlePeople = (e) => {
		const people = e.target.value;
		setPeople(people);
	};

	return (
		<>
			<div id='main-bill-container'>
				<p>Render Count: {renderCount}</p>
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
								defaultValue={parseFloat(
									billRef.current
								).toFixed(2)}
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
							<input
								type='number'
								defaultValue={people}
								onChange={handlePeople}
							/>
						</div>
					</div>
				</div>
				<div className='right-container'>
					<div className='tip-amount'>
						<p>
							Tip Amount <span> / person</span>
						</p>
						<h2>
							$
							{people !== 0
								? parseFloat(
										totalTipRef.current / people
								  ).toFixed(2)
								: parseFloat(0).toFixed(2)}
						</h2>
					</div>
					<div className='total-amount'>
						<p>
							Total <span> / person</span>
						</p>
						<h2>${parseFloat(eachPax).toFixed(2)}</h2>
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
