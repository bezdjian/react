import React, {Component} from 'react';
import './css/App.css';
import './components/Repository/css/Repository.css'

import Profile from './components/Profile';

class App extends Component {
    render() {
        return (
            <div>
                <h2 className="header">My Github Repositories</h2>
                <hr/>
                <Profile/>
            </div>
        )
    }
}

export default App;
