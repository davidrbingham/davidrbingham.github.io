import React from 'react';

import 'styles/index.scss';

import ContentContainer from './components/content/ContentContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeImage from '../images/titles/title-welcome.svg';

export default class App extends React.Component {
	render() {
		return (
			<div className="app-wrapper">
				<div className="page-wrapper">
					<Header/>
					<div className="page-sidebar image-wrapper">
						<div>
							<img width="100%" height="100%" src={WelcomeImage}/>
						</div>
					</div>
					<div className="page-content">
						<ContentContainer/>
					</div>
					<Footer/>
				</div>
			</div>
		)
	}
}
