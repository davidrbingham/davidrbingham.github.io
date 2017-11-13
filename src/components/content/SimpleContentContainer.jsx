import React from 'react';
import PropTypes from 'prop-types';

export default class Grid extends React.Component {

	render() {
		return (
			<div className="simple-content-container">
				{ this.props.content }
			</div>
		);
	}
}

Grid.propTypes = {
	content: PropTypes.string.isRequired
};


