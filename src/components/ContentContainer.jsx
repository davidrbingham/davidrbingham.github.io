import React from 'react';
import 'styles/components/content-container.scss';
import PropTypes from 'prop-types';

export default class Grid extends React.Component {

	render() {
		return (
			<div class="content-wrapper">
				<div class="content-box content-title">{this.props.footer}</div>
				<div class="content-box content-sidebar"><img src={this.props.sidebarImage}/></div>
				<div class="content-box content-content">
					{this.props.content}
				</div>
				<div class="content-box content-footer">{this.props.footer}</div>
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


