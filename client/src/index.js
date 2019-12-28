import React from 'react';
import ReactDOM from 'react-dom';
import ApolloProvider from './ApolloProvider';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import 'semantic-ui-css/semantic.min.css'
import './styles/styles.scss'

const store = configureStore();


const jsx = (
    <Provider store={store}>
      {ApolloProvider}
    </Provider>
  );
ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
