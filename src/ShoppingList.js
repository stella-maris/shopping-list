import React, { Component } from 'react';
import ListData from './ListData';
import './App.css';

class ShoppingList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            item: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Submit", this.state);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="item"
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                <ListData />
            </div>
        );
    }
}

export default ShoppingList;