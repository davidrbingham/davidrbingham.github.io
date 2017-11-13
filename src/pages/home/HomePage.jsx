import React from 'react';
import Layout from '../../Layout';
import HomeSidebar from './HomeSidebar';
import HomeContent from './HomeContent';

export default class HomePage extends React.Component {

	render() {
		return (
			<Layout>
				<HomeSidebar/>
				<HomeContent/>
			</Layout>
		);
	}
}
