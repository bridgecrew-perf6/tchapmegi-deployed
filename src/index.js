import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import App from './components';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ec712e'
      },
    },
  })


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
 );

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Router>
        <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>            
        </Provider>
    </Router>,
    document.getElementById("root")
);
