import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

import { Grid, Row, Col } from 'react-bootstrap';
import './style.scss';

let store = createStore(todoApp)

render(

		<Grid>
			<Row className="show-grid">
				<Col md={6}>
					Welcome
				</Col>
				<Col md={6}>
					<Provider store={store}>
					<App />
					</Provider>
				</Col>
			</Row>
		</Grid>,

	document.getElementById('app')
)