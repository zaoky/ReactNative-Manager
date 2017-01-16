import * as React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './component/LoginForm';
import thunk from 'redux-thunk';
import RouterComponent from './router';


export default class Manager extends React.Component<any, any>{

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyD_GjQLuknFjGfcQ1PHMEqYvNkFGZVTLrA',
            authDomain: 'manager-3e572.firebaseapp.com',
            databaseURL: 'https://manager-3e572.firebaseio.com',
            storageBucket: 'manager-3e572.appspot.com',
            messagingSenderId: '193903942868'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(thunk))} >
                <RouterComponent />
            </Provider>
        );
    }
}