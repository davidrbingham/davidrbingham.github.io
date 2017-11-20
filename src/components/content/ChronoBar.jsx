import React from 'react';
import PropTypes from 'prop-types';

export default class ChronoBar extends React.Component {

	constructor(props){
		super(props);
		this.handleClickEvent = this.handleClickEvent.bind(this);
		this.getChronoBarEntries = this.getChronoBarEntries.bind(this);
	}

	handleClickEvent(index){
		this.props.callback(index);
	}

	getChronoBarEntries(){
		return this.props.options && this.props.options.map((option, index) => {
			return <div onClick={() => {this.handleClickEvent(index)}}>{option.title}</div>;
		});
	}

	render() {
		return (
			<div>
				<div id="chronobar">
					{this.getChronoBarEntries()}
				</div>
			</div>
		);
	}
}

ChronoBar.propTypes = {
	options: PropTypes.array.isRequired,
	callback: PropTypes.func.isRequired
};
