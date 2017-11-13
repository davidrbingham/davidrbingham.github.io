import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'styles/index.scss';
import HomePage from './pages/home/HomePage';
import EducationPage from './pages/education/EducationPage';

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={ HomePage }/>
					<Route path="/portfolio/education" component={ EducationPage }/>
				</Switch>
			</BrowserRouter>
		);
	}
}
