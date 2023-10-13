import React from 'react';

const MainBodyBill = () => {
	return (
		<>
			<div id='main-bill-container'>
				<div className='left-container'>
					<div id='bill-container'>
						<p>BILL</p>
						<input type='text' />
					</div>
					<div className='tip-container'>
						<p>Select Tip %</p>
						<div className='tip-buttons-container'>
							<input type='button' value='5%' />
							<input type='button' value='10%' />
							<input type='button' value='15%' />
							<input type='button' value='25%' />
							<input type='button' value='50%' />
							<input type='button' value='Custom' />
						</div>
					</div>
					<div className='pax-container'>
						<p>Number of People</p>
						<input type='text' />
					</div>
				</div>
				<div className='right-container'>
					<div className='tip-amount'>
						<p>
							Tip Amount <span> / person</span>
						</p>
						<h2>$4.27</h2>
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