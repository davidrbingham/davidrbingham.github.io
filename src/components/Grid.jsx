import React from 'react';
import 'styles/components/grid.scss';
import PropTypes from 'prop-types';

export default class Grid extends React.Component {

	render() {
		return (
			<div class="wrapper">
				<div class="box header">{this.props.footer}</div>
				<div class="box sidebar"><img src={this.props.sidebarImagePath} alt="bottom right" class="topleft"/></div>
				<div class="box content">
					{this.props.content}
				</div>
				<div class="box footer">{this.props.footer}</div>
			</div>
		);
	}
}

Grid.propTypes = {
	header: PropTypes.string.isRequired,
	sidebarImagePath: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	footer: PropTypes.string.isRequired
};


