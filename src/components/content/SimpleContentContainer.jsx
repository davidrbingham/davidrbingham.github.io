import React from 'react';
import PropTypes from 'prop-types';

export default class SimpleContentContainer extends React.Component {

	constructor(props){
		super(props);
		this.getTitleSection = this.getTitleSection.bind(this);
	}

	getTitleSection(){
		if(this.props.title){
			return <p>
				<b>{ this.props.title }</b>
			</p>;
		}
	}

	render() {
		return (
			<div className="simple-content-container">
				{ this.getTitleSection() }
				{ this.props.children }
			</div>
		);
	}
}

SimpleContentContainer.propTypes = {
	title: PropTypes.string
};

