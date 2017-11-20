import React from 'react';
import ContentContainer from '../../components/content/ContentContainer';
import educationalHistory from '../../../json/education.json';

export default class EducationContent extends React.Component {

	getEducationContentEntries() {
		return educationalHistory.map((entry, index) => {
			return <ContentContainer key={index}
															 contentType="minimal"
															 header={entry.header}
															 sidebarText={entry.sidebarText}
															 sidebarImageURL={entry.sidebarImageURL}
															 content={entry.content}
															 footnote={entry.footnote}/>;
		});
	}

	render() {
		return (
			<div className="page-content">
				{ this.getEducationContentEntries() }
			</div>
		);
	}
}
