import React from 'react';
import ContentContainer from '../../components/content/ContentContainer';

import QUBImage from '../../../images/logos/logo-qub.svg';

export default class SkillsContent extends React.Component {

	render() {
		return (
			<div className="page-content">
				<ContentContainer header="Queen's University Belfast"
													sidebarImage={QUBImage}
													content="BSc Geography, Archaeology and Palaeocology"
													footer="Result Obtained : 2:1"/>
			</div>
		);
	}
}
