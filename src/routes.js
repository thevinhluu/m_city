import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/Header_footer/header';
import Footer from './components/Header_footer/footer';
import Home from './components/Home';
import SignIn from './components/Signin';

const Routes = (props) => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path='/sign_in' exact component={SignIn} />
				<Route path='/' exact component={Home} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
