import React from 'react';
import WelcomeImage from '../../../images/titles/title-welcome.svg';

export default class HomeSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar image-wrapper">
				<div>
					<object width="100%" height="100%" type="image/svg+xml" data={WelcomeImage}/>
				</div>
			</div>
		);
	}
}
