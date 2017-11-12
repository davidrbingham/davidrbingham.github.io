import React from 'react';
import 'styles/index.scss';
import Grid from './components/Grid';

export default class App extends React.Component {
  render() {
    return (
      <div>
				<div className="page-sidebar">
					Hwllo
				</div>
				<div className="page-content">
					<Grid header="Some Header"
								sidebarImagePath="http://gridbyexample.com/examples/code/arrow-bottom-right.png"
								content="Some Content"
								footer="Some Footer"
					/>
				</div>
      </div>
    )
  }
}
