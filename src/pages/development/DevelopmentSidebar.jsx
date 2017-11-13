import React from 'react';
import DevelopmentImage from '../../../images/titles/title-development.svg';

export default class DevelopmentSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar image-wrapper">
				<div>
					<object width="100%" height="100%" type="image/svg+xml" data={DevelopmentImage}/>
				</div>
			</div>
		);
	}
}
