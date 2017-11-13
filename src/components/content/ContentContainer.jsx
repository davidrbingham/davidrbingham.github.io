import React from 'react';
import PropTypes from 'prop-types';
import ContentEntry from './ContentEntry';

export default class Grid extends React.Component {

	render() {
		return (
			<div className="content-container">
				<ContentEntry { ...this.props }/>
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


