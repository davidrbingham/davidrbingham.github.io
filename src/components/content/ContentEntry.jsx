import React from 'react';
import PropTypes from 'prop-types';

export default class Grid extends React.Component {

	render() {
		return (
			<div className="content-wrapper">
				<div className="content-box content-title">
					<b>{this.props.header}</b>
				</div>
				<div className="content-box content-sidebar">
					1992-1993
					<img src={this.props.sidebarImage}/>
				</div>
				<div className="content-box content-content">
					{this.props.content}
				</div>
				<div className="content-box content-footer">{this.props.footer}</div>
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


