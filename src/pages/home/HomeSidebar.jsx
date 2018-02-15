import React from 'react';
import WelcomeImage from '../../../images/titles/title-welcome.svg';

export default class HomeSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar">
				<div className="image-align-right">
					<object type="image/svg+xml" data={WelcomeImage}/>
				</div>
			</div>
		);
	}
}
