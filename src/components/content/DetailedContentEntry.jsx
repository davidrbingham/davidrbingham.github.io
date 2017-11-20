import React from 'react';
import PropTypes from 'prop-types';

export default class DetailedContentEntry extends React.Component {

	constructor(props){
		super(props);
		this.getContentEntries = this.getContentEntries.bind(this);
		this.getDetailEntries = this.getDetailEntries.bind(this);
	}

	getContentEntries(){
		return this.props.content && this.props.content.map((contentEntry, index) => {
			return <div key={index}>
					<b>{contentEntry.contentTitle}</b>
					<ul>
						{this.getDetailEntries(contentEntry.details)}
					</ul>
				</div>;
		});
	}

	getDetailEntries(details){
		return details && details.map((detailEntry, index) => {
			return <li key={index}>
				{ detailEntry.description }
			</li>;
		});
	}

	render() {
		return (
			<div className="content-wrapper">
				<div className="content-box content-title">
					<b><i>{this.props.header}</i></b>
				</div>
				<div className="content-box content-sidebar">
					<b>{this.props.sidebarText}</b>
					<div>
						<img className="content-sidebar-image" src={this.props.sidebarImageURL}/>
					</div>
				</div>
				<div className="content-box content-content">
					<div><b>{this.props.title}</b></div>
					<p>{this.props.description}</p>
					{this.getContentEntries()}
				</div>
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
	content: PropTypes.array.isRequired
};
