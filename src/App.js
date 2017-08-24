import React, { Component } from 'react';
import ReactLazyloadComponent from './reactLazyloadComponent';
import Content from './content';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>↓↓↓↓↓</h2>
                <div className="gap"></div>
                <ReactLazyloadComponent>
                    <Content />
                </ReactLazyloadComponent>
            </div>
        );
    }
}

export default App;
