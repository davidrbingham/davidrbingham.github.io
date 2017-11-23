import React from 'react';
import PropTypes from 'prop-types';

import RightIcon from '../../../images/icons/icon-right.svg';
import LeftIcon from '../../../images/icons/icon-left.svg';

import ContentContainer from '../../components/content/ContentContainer';
import ChronoBar from './ChronoBar';

export default class ChronoContentContainer extends React.Component {

	constructor(props){
		super(props);
		this.state = { containerIndex: 0 };
	}

	getContentEntries() {
		const entry = this.props.contents[this.state.containerIndex];

		if(this.props.contentType === "detailed"){
			return (<div>
				{this.getChronoHeader(entry)}
				<ContentContainer contentType="detailed"
													header={entry.header}
													title={entry.title}
													description={entry.description}
													sidebarText={entry.sidebarText}
													sidebarImageURL={entry.sidebarImageURL}
													content={entry.content}
													footer={entry.footer}/>
				{this.getChronoFooter()}
			</div>);
		} else {
			return <div>
				{this.getChronoHeader(entry)}
				<ContentContainer header={entry.header}
													sidebarText={entry.sidebarText}
													sidebarImageURL={entry.sidebarImageURL}
													content={entry.content}
													footnote={entry.footnote}/>
				{this.getChronoFooter()}
			</div>;
		}
	}

	getChronoHeader(entry){
		return <div className="chrono-header-container">
			{this.getMoveLeftButton()}
			{`${entry.period.start} - ${entry.period.end}`}
			{this.getMoveRightButton()}
		</div>;
	}

	getChronoFooter(){
		const options = this.props.contents && this.props.contents.map((entry) => {
			return {
				title: `${entry.period.start} - ${entry.period.end}`
			};
		});
		return <div className="chrono-footer-container">
			<ChronoBar
				options={options}
				callback={(index) => {
					this.setState({
						containerIndex: index
					});
				}}/>
		</div>;
	}

	getMoveRightButton(){
		return <button className="phony-button" onClick={ () => {this.navigate(1);} } title="Download Resume">
			<img width="25px" height="25px" src={RightIcon}/>
		</button>;
	}

	getMoveLeftButton(){
		return <button className="phony-button" onClick={ () => {this.navigate(-1);} } title="Download Resume">
			<img width="25px" height="25px" src={LeftIcon}/>
		</button>;
	}

	navigate(offset){
		let newIndex = this.state.containerIndex + offset;
		if(newIndex >= this.props.contents.length) {
			newIndex = 0;
		} else if(newIndex < 0){
			newIndex = this.props.contents.length - 1;
		}
		this.setState({
			containerIndex: newIndex
		});
	}

	render() {
		return (
			<div>
				{ this.getContentEntries() }
			</div>
		);
	}
}

ChronoContentContainer.propTypes = {
	contents: PropTypes.array.isRequired,
	contentType: PropTypes.string
};
