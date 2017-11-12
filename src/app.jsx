import React from 'react';
import 'styles/index.scss';
import Grid from './components/Grid';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>It works on github pages!!!</h1>
				<Grid header="Some Header"
							sidebarImagePath="http://gridbyexample.com/examples/code/arrow-bottom-right.png"
							content="Some Content"
							footer="Some Footer"
				/>
      </div>
    )
  }
}
