import React from 'react';
import SimpleContentContainer from '../../components/content/SimpleContentContainer';

export default class CertificationContent extends React.Component {

	render() {
		return (
			<div className="page-content">
				<SimpleContentContainer title="Currently Achieved Certifications">
					<p>Oracle Certified Associate, Java SE 8 Programmer (achieved August 2017)</p>
					<p><img className="certification-img-container" src='http://www.davidbingham.me/images/badges/badges-oca.png'/></p>
					<p><b>Certifications I am Working Towards</b></p>
					<p>Oracle Certified Professional, Java SE 8 Programmer (due to complete August 2018)</p>
					<p>Pivotal Core Spring Professional Certification (due to complete October 2018)</p>
				</SimpleContentContainer>
			</div>
		);
	}
}
