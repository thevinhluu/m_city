import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Admin/Dashboard';
import AddEditMatch from './components/Admin/matches/addEditMatch';
import AdminMatches from './components/Admin/matches/index';
import AdminPlayers from './components/Admin/players';
import AddEditPlayer from './components/Admin/players/addEditPlayers';
import Footer from './components/Header_footer/footer';
import Header from './components/Header_footer/header';
import Home from './components/Home';
import SignIn from './components/Signin';
import TheTeam from './components/theTeam';
import AuthGuard from './Hoc/Auth';
import TheMatches from './components/theMatches';
import NotFound from './components/not_found';

const Routes = ({ user }) => {
	return (
		<BrowserRouter>
			<Header user={user} />
			<Switch>
				<Route path='/admin_matches/edit_match/:matchid' exact component={AuthGuard(AddEditMatch)} />
				<Route path='/admin_matches/add_match' exact component={AuthGuard(AddEditMatch)} />
				<Route path='/admin_matches' exact component={AuthGuard(AdminMatches)} />

				<Route path='/admin_players/edit_player/:playerid' exact component={AuthGuard(AddEditPlayer)} />
				<Route path='/admin_players/add_player' exact component={AuthGuard(AddEditPlayer)} />
				<Route path='/admin_players' exact component={AuthGuard(AdminPlayers)} />

				<Route path='/dashboard' component={AuthGuard(Dashboard)} />
				<Route path='/the_matches' component={TheMatches} />
				<Route path='/the_team' component={TheTeam} />
				<Route path='/sign_in' exact component={(props) => <SignIn {...props} user={user} />} />
				<Route path='/' exact component={Home} />
				<Route component={NotFound} />
			</Switch>
			<ToastContainer />
			<Footer />
		</BrowserRouter>
	);
};

export default Routes;
