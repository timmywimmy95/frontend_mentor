import React from 'react';
import MainBodyText from './components/MainBodyText';
import '../src/App.css';
import MainBodyBill from './components/MainBodyBill';

const App = () => {
	return (
		<>
			<div className='container'>
				<MainBodyText />
				<MainBodyBill />
			</div>
		</>
	);
};

export default App;
