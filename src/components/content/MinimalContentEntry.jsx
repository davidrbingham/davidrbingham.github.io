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
					<p>{this.props.content}</p>
					<p><b>{this.props.footnote}</b></p>
				</div>
			</div>
		);
	}
}

MinimalContentEntry.propTypes = {
	header: PropTypes.string.isRequired,
	sidebarText: PropTypes.string.isRequired,
	period: PropTypes.object.isRequired,
	sidebarImageURL: PropTypes.string,
	content: PropTypes.string.isRequired,
	footnote: PropTypes.string.isRequired
};


