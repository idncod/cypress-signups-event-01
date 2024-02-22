import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './pages/home/home';
import CypressInfo from './pages/cypress-info/cypress-info';
import CypressInfoCert from './pages/cypress-info-cert/cypress-info-cert';
import CypressChoices from './pages/cypress-choices/cypress-choices';
import CypressChoicesCert from './pages/cypress-choices-cert/cypress-choices-cert';

const App = () => {
	return (
		<div className="page-container">
			<Header />
			<Routes>
				<Route exact path='/' Component={Home}></Route>
				<Route exact path='/cypress-info' Component={CypressInfo}></Route>
				<Route exact path='/cypress-info-certificate' Component={CypressInfoCert}></Route>
				<Route exact path='/cypress-choices' Component={CypressChoices}></Route>
				<Route exact path='/cypress-power-certificate' Component={CypressChoicesCert}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;