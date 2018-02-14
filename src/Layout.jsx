import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default class Layout extends React.Component {
	render() {
		return (
			<div className="app-wrapper">
				<div className="page-wrapper">
					<Header/>
					{this.props.children}
					<Footer/>
				</div>
			</div>
		)
	}
}
