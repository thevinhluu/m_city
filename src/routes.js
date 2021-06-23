import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Admin/Dashboard';
import Footer from './components/Header_footer/footer';
import Header from './components/Header_footer/header';
import Home from './components/Home';
import SignIn from './components/Signin';
import AuthGuard from './Hoc/Auth';

const Routes = ({ user }) => {
	return (
		<BrowserRouter>
			<Header user={user} />
			<Switch>
				<Route path='/dashboard' exact component={AuthGuard(Dashboard)} />
				<Route path='/sign_in' exact component={(props) => <SignIn {...props} user={user} />} />
				<Route path='/' exact component={Home} />
			</Switch>
			<ToastContainer />
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
