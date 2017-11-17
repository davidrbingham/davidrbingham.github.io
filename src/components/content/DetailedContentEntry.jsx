import React from 'react';
import PropTypes from 'prop-types';

export default class DetailedContentEntry extends React.Component {

	constructor(props){
		super(props);
		this.getContentEntries = this.getContentEntries.bind(this);
		this.getDetailEntries = this.getDetailEntries.bind(this);
	}

	getContentEntries(){
		return this.props.content && this.props.content.map((contentEntry) => {
			return <div>
					{contentEntry.contentTitle}
					<ul>
						{this.getDetailEntries(contentEntry.details)}
					</ul>
				</div>;
		});
	}

	getDetailEntries(details){
		return details && details.map((detailEntry) => {
			return <li>
				{ detailEntry.description }
			</li>;
		});
	}

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
					<p>{this.props.title}</p>
					<p>{this.props.description}</p>
					{this.getContentEntries()}
				</div>
				<div className="content-box content-footer">{this.props.footer}</div>
			</div>
		);
	}
}

DetailedContentEntry.propTypes = {
	header: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	sidebarText: PropTypes.string.isRequired,
	sidebarImageURL: PropTypes.string,
	content: PropTypes.array.isRequired,
	footer: PropTypes.string
};
