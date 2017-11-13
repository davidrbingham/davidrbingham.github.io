import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import 'styles/index.scss';
import HomePage from './pages/home/HomePage';
import EducationPage from './pages/education/EducationPage';
import CertificationPage from './pages/certifications/CertificationPage';
import DevelopmentPage from './pages/development/DevelopmentPage';
import ExperiencePage from './pages/experience/ExperiencePage';

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={ HomePage }/>
					<Route path="/portfolio/education" component={ EducationPage }/>
					<Route path="/portfolio/certifications" component={ CertificationPage }/>
					<Route path="/portfolio/development" component={ DevelopmentPage }/>
					<Route path="/portfolio/experience" component={ ExperiencePage }/>
				</Switch>
			</BrowserRouter>
		);
	}
}
