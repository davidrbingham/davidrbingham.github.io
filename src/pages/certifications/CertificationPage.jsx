import React from 'react';
import Layout from '../../Layout';
import CertificationSidebar from './CertificationSidebar';
import CertificationContent from './CertificationContent';

export default class CertificationPage extends React.Component {

	render() {
		return (
			<Layout>
				<CertificationSidebar/>
				<CertificationContent/>
			</Layout>
		);
	}
}
