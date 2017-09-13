import React, { Component } from 'react';
import NavigationBar from 'components/NavigationBar/NavigationBar';
import {Background } from './App.style';
import IconExample from 'containers/Home/Home';

class App extends Component {
    render() {
        return (
            <div>
                <Background/>
                <NavigationBar/>

                {this.props.children}
            </div>
        );
    }
}

export default App;