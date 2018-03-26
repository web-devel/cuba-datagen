import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {AppState, initStore} from "./redux/store";
import {Provider} from 'react-redux';
import {Store} from "redux";

export const DEFAULT_APP_URL = 'http://localhost:8080/app/rest/';
export const APP_NAME = 'cuba-datagen';

export const store: Store<AppState> = initStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
