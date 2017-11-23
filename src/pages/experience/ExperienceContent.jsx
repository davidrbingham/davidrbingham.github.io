import React from 'react';
import ChronoContentContainer from '../../components/content/ChronoContentContainer';
import experience from '../../../json/experience.json';

export default class ExperienceContent extends React.Component {

	render() {
		return (
			<div className="page-content">
				<ChronoContentContainer contents={experience} contentType="detailed"/>
			</div>
		);
	}
}
