import React from 'react';
import Layout from '../../Layout';
import DevelopmentSidebar from './DevelopmentSidebar';
import DevelopmentContent from './DevelopmentContent';

export default class DevelopmentPage extends React.Component {

	render() {
		return (
			<Layout>
				<DevelopmentSidebar/>
				<DevelopmentContent/>
			</Layout>
		);
	}
}
