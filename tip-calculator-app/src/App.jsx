import React from 'react';
import MainBodyText from './components/MainBodyText';
import '../src/App.css';
import MainBodyBill from './components/MainBodyBill';

const App = () => {
	return (
		<>
			<div className='container'>
				<div className='components-container'>
					<MainBodyText />
					<MainBodyBill />
				</div>
			</div>
		</>
	);
};

export default App;
