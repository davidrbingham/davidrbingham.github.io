import React from 'react';
import PropTypes from 'prop-types';

export default class ProgressBar extends React.Component {

	render() {
		return (
			<div className="progress-bar-container">
				<div className={`progress-bar-${this.props.percentage}`}>
					<div className="progress-bar">
						<div className="progress-bar-content">
							<div className="progress-bar-content-item">
								<img className="progress-bar-img-container" src={this.props.imageURL}/>
							</div>
							<div className="progress-bar-content-item">
								{`${this.props.description}`}
							</div>
							<div className="progress-bar-content-item">
								{`${this.props.percentage}`}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ProgressBar.propTypes = {
	description: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
	imageURL: PropTypes.string.isRequired
};
