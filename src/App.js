
import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import CypressInfo from './pages/cypressinfo/cypressinfo';

const App = () => {
	return (
		<div className="page-container">

			<Routes>
				<Route exact path='/' Component={Home}></Route>
				<Route exact path='/cypressinfo' Component={CypressInfo}></Route>
			</Routes>
		</div>
	);
}

export default App;