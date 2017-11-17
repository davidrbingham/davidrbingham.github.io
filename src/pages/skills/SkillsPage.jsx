import React from 'react';
import Layout from '../../Layout';
import SkillsSidebar from './SkillsSidebar';
import SkillsContent from './SkillsContent';

export default class SkillsPage extends React.Component {

	render() {
		return (
			<Layout>
				<SkillsSidebar/>
				<SkillsContent/>
			</Layout>
		);
	}
}
