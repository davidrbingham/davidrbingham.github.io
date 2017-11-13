import React from 'react';
import Layout from '../../Layout';
import ExperienceSidebar from './ExperienceSidebar';
import ExperienceContent from './ExperienceContent';

export default class ExperiencePage extends React.Component {

	render() {
		return (
			<Layout>
				<ExperienceSidebar/>
				<ExperienceContent/>
			</Layout>
		);
	}
}
