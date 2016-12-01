import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import About from './components/about'
import Menu from './components/menu'
import Help from './components/about/help'
import NotFound from './components/error'

import {VisibleProjectList, ProjectDetail} from './components/projects'
import { Grid, Row, Col } from 'react-bootstrap';
import './style.scss';
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute  } from 'react-router'

let store = createStore(todoApp)

class Main extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
				<Menu/>
				<Grid>
					<Row className="show-grid">
						<Col md={4}>
							<VisibleProjectList/>
						</Col>
						<Col md={8}>
							{this.props.children}
						</Col>
					</Row>
				</Grid>
				</div>
			</Provider>
		)
	}
}


render((
	<Router history = {browserHistory}>
		<Route path = "/" component = {Main}>
			<IndexRoute component = {App} />
			<Route path = "about" component = {About}>
				<Route path="help" component={Help} />
			</Route>
			<Route path = "project/:projectId" component = {ProjectDetail}/>
			<Route path='*' component={NotFound} />
		</Route>
	</Router>

), document.getElementById('app'))


