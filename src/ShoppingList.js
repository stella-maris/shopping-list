import React, { Component } from 'react';
import ListData from './ListData';
import './App.css';

class ShoppingList extends Component {
    render() {
        return (
            <div>Hello
                <ListData/>
            </div>
        );
    }
}

export default ShoppingList;