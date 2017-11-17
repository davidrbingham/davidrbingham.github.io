import React from 'react';
import PropTypes from 'prop-types';

export default class MinimalContentEntry extends React.Component {

	render() {
		return (
			<div className="content-wrapper">
				<div className="content-box content-title">
					<b>{this.props.header}</b>
				</div>
				<div className="content-box content-sidebar">
					{this.props.sidebarText}
					<div>
						<img className="content-sidebar-image" src={this.props.sidebarImageURL}/>
					</div>
				</div>
				<div className="content-box content-content">
					{this.props.content}
				</div>
				<div className="content-box content-footer">{this.props.footer}</div>
			</div>
		);
	}
}

MinimalContentEntry.propTypes = {
	header: PropTypes.string.isRequired,
	sidebarText: PropTypes.string.isRequired,
	sidebarImageURL: PropTypes.string,
	content: PropTypes.string.isRequired,
	footer: PropTypes.string.isRequired
};


