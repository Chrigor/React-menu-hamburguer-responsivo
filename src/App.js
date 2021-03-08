import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/Menu';
import GlobalStyles from './GlobalStyles';

import Logo from './assets/logo.png';

const colors = {
	primary: '#e2f3f5',
	secondary: '#3d5af1',
	third: '#e2f3f5'
};

const routes = [
	{
		path: '/',
		label: 'Home'
	},
	{
		path: '/my-events',
		label: 'My Events'
	},
	{
		path: '/create-events',
		label: 'Create Events'
	}
];

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Menu routes={routes} imageBrandIcon={Logo} colors={colors} />
		</BrowserRouter>
	);
}

export default App;
