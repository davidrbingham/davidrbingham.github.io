import React from 'react';
import PropTypes from 'prop-types';

import MinimalContentEntry from './MinimalContentEntry';
import DetailedContentEntry from './DetailedContentEntry';

export default class ContentContainer extends React.Component {

	constructor(props){
		super(props);
		this.getContentEntry = this.getContentEntry.bind(this);
	}

	getContentEntry(){
		if(this.props.contentType === "detailed"){
			return <div>
				<DetailedContentEntry { ...this.props }/>
			</div>;
		} else {
			return <div>
				<MinimalContentEntry { ...this.props }/>
			</div>;
		}
	}

	render() {
		return (
			<div className="content-container">
				{ this.getContentEntry() }
			</div>
		);
	}
}

ContentContainer.propTypes = {
	contentType: PropTypes.string.isRequired
};
