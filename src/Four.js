import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Four extends Component {
    render() {
        return (
            <div>
                <h1>I am Four component</h1>
                <ul>
                    <li><Link to="/Four/123">Four Point One</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}