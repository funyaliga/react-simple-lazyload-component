import React, { Component } from 'react';
import ReactLazyloadComponent from './reactLazyloadComponent';
import Content from './content';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ReactLazyloadComponent>
                    <Content />
                </ReactLazyloadComponent>
            </div>
        );
    }
}

export default App;
