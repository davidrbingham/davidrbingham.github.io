import React from 'react';
import PropTypes from 'prop-types';
import ContentEntry from './ContentEntry';

import QUBImage from '../../../images/logos/logo-qub.svg';

export default class Grid extends React.Component {

	render() {
		return (
			<div className="content-container">
				<ContentEntry header="Queen's University Belfast"
											sidebarImage={QUBImage}
											content="BSc Geography, Archaeology and Palaeocology"
											footer="Result Obtained : 2:1"/>
			</div>
		);
	}
}

Grid.propTypes = {
	header: PropTypes.string.isRequired,
	sidebarImage: PropTypes.object.isRequired,
	content: PropTypes.string.isRequired,
	footer: PropTypes.string.isRequired
};


