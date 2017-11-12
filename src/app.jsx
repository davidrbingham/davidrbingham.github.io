import React from 'react';
import 'styles/index.scss';
import Grid from './components/ContentContainer';
import WelcomeImage from '../images/titles/title-welcome.svg';
import RaspberryPiImage from '../images/logos/logo-raspberry-pi.svg';

import GitHubLogo from '../images/logos/logo-github.svg.svg';
import LinkedinLogo from '../images/logos/logo-linkedin.svg.svg';
import TwitterLogo from '../images/logos/logo-twitter.svg.svg';
import EmailIcon from '../images/icons/icon-email.svg.svg';

export default class App extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
				<div className="page-header">
					This is the header
					<img width="50" height="50" src={GitHubLogo}/>
					<img width="50" height="50" src={LinkedinLogo}/>
					<img width="50" height="50" src={TwitterLogo}/>
					<img width="50" height="50" src={EmailIcon}/>
				</div>
				<div className="page-sidebar image-wrapper">
					<img width="100%" height="100%" src={WelcomeImage}/>
				</div>
				<div className="page-content">
					<Grid header="Some Header"
								sidebarImage={RaspberryPiImage}
								content="Some Content"
								footer="Some Footer"
					/>
				</div>
      </div>
    )
  }
}
