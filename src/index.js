import React from 'react';
import './index.css';
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers/index'
import Root from './Root';

const store = createStore(reducer)

render(<Root store={store} />, document.getElementById('root'));
