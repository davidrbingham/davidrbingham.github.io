import React from 'react';
import PropTypes from 'prop-types';

import ContentContainer from '../../components/content/ContentContainer';

export default class ChronoContentContainer extends React.Component {

	getContentEntries() {
		return this.props.contents && this.props.contents.map((entry, index) => {
			return <ContentContainer key={index}
															 contentType="detailed"
															 header={entry.header}
															 title={entry.title}
															 description={entry.description}
															 sidebarText={entry.sidebarText}
															 sidebarImageURL={entry.sidebarImageURL}
															 content={entry.content}
															 footer={entry.footer}/>;
		});
	}

	render() {
		return (
			<div className="page-content">
				{ this.getContentEntries() }
			</div>
		);
	}
}

ChronoContentContainer.propTypes = {
	contents: PropTypes.object.isRequired
};
