import React from 'react';
import Layout from '../../Layout';
import EducationSidebar from './EducationSidebar';
import EducationContent from './EducationContent';

export default class HomePage extends React.Component {

	render() {
		return (
			<Layout>
				<EducationSidebar/>
				<EducationContent/>
			</Layout>
		);
	}
}
