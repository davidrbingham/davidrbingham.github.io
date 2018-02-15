import React from 'react';
import {Link} from 'react-router-dom'
import Resume from '../../resume/resume.html';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
		this.downloadResume = this.downloadResume.bind(this);

		this.state = { iFrameRef: undefined };
	}

	addRefToLocalState = (frame) => {
		try {
			this.setState({
				iFrameRef: frame
			});
		} catch (e) {
			console.log(e);
		}
	};

	downloadResume(){
		this.state.iFrameRef.contentWindow.document.write(Resume.toString());
		this.state.iFrameRef.contentWindow.document.close();
	}

	render() {
		return (
			<div className="page-header">
				<div className="header-container">

					<div className="header-links-container">
						<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/'}><b>HOME</b></Link>
						</span>
						</div>
						<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/portfolio/education'}><b>EDUCATION</b></Link>
						</span>
						</div>
						<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/portfolio/experience'}><b>EXPERIENCE</b></Link>
						</span>
						</div>
						<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/portfolio/skills'}><b>SKILLS</b></Link>
						</span>
						</div>
						<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/portfolio/certifications'}><b>CERTIFICATIONS</b></Link>
						</span>
						</div>
						<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/portfolio/development'}><b>WORKING ON</b></Link>
						</span>
						</div>
						<div className="header-item">
						<span className="hor-rhythm-1">
							<b>BLOG</b>
						</span>
						</div>
					</div>

					<div className="header-contact-container">
						<div className="header-item">
							<span className="hor-rhythm-1">
							<button className="phony-button" onClick={ () => { window.open("http://github.com/telbot", '_blank'); } } title="GitHub">
								<img width="25px" height="25px" src='http://www.davidbingham.me/images/logos/logo-github.svg'/>
							</button>
							</span>
						</div>
						<div className="header-item">
						<span className="hor-rhythm-1">
							<button className="phony-button" onClick={ () => { window.open("http://www.linkedin.com/in/david-bingham-a168a610a", '_blank'); } } title="LinkedIn">
								<img width="25px" height="25px" src='http://www.davidbingham.me/images/logos/logo-linkedin.svg'/>
							</button>
						</span>
						</div>
						<div className="header-item">
						<span className="hor-rhythm-1">
							<button className="phony-button" onClick={ () => { window.open("https://twitter.com/davidrbingham", '_blank'); } } title="Twitter">
								<img width="25px" height="25px" src='http://www.davidbingham.me/images/logos/logo-twitter.svg'/>
							</button>
						</span>
						</div>
						<div className="header-item">
						<span className="hor-rhythm-1">
							<button className="phony-button" onClick={ () => { location.href='mailto:davidrbingham@hotmail.co.uk' } } title="Email">
								<img width="25px" height="25px" src='http://www.davidbingham.me/images/icons/icon-email.svg'/>
							</button>
						</span>
						</div>
						{/*						<div className="header-item">
						<span className="hor-rhythm-1">
							<button className="phony-button" onClick={ this.downloadResume } title="Download Resume">
								<img width="25px" height="25px" src='http://www.davidbingham.me/images/logos/logo-resume.svg'/>
							</button>
						</span>
						</div>*/}
					</div>
				</div>
				<iframe src="about:blank"
								className="iframe-hidden"
								ref={ this.addRefToLocalState }
				/>
			</div>
		);
	}
}
