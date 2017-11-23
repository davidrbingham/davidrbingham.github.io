import React from 'react';
import ChronoContentContainer from '../../components/content/ChronoContentContainer';
import educationalHistory from '../../../json/education.json';

export default class EducationContent extends React.Component {

	render() {
		return (
			<div className="page-content">
				<ChronoContentContainer contents={educationalHistory} contentType="detailed"/>
			</div>
		);
	}
}
