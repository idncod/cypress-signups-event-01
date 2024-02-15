import React from "react";
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './pages/home/home';
import CypressInfo from './pages/cypress-info/cypress-info';
import CypressInfoCert from './pages/cypress-info-cert/cypress-info-cert';
import CypressCapability from './pages/cypress-capability/cypress-capability';
import CypressCapabilityCert from './pages/cypress-capability-cert/cypress-capability-cert';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path='/' Component={Home}></Route>
				<Route exact path='/cypress-info' Component={CypressInfo}></Route>
				<Route exact path='/cypress-info-certificate' Component={CypressInfoCert}></Route>
				<Route exact path='/cypress-capability' Component={CypressCapability}></Route>
				<Route exact path='/cypress-power-certificate' Component={CypressCapabilityCert}></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;