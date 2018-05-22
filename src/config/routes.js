import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
console.disableYellowBox = true;
import Home from '../components/home';
import Login from '../components/login';

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home"
                    component={Home}
                    hideNavBar={true}
                    initial
                />
                <Scene key="login"
                    component={Login}
                    title="Login"
                    onLeft={Actions.pop}
                />
            </Scene>
        </Router>
    );
}

export default App;