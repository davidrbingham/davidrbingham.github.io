import React from 'react';
import DevelopmentImage from '../../../images/titles/title-development.svg';

export default class DevelopmentSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar">
				<div>
					<object type="image/svg+xml" data={DevelopmentImage}/>
				</div>
			</div>
		);
	}
}
