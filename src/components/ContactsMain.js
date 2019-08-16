import React, {Component} from "react";
import Contacts from "../constrants/Contacts";
import Button from "../constrants/Button";
import { hot } from "react-hot-loader/root"
//import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class ContactsMain extends Component {
    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({contacts: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <Contacts contacts={this.state.contacts}/>
                <Button bname="blabla" text="Just button"/>
            </div>
        )
    }
}

export default hot(ContactsMain)