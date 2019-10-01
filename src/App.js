import React, {Component} from 'react';
//import './css/App.css';
//import './components/Courses/css/Repository.css'

import Profile from './components/Profile';

class App extends Component {
    render() {
        return (
            <div>
                <h2 className="header">My Courses</h2>
                <hr/>
                <Profile/>
            </div>
        )
    }
}

export default App;
