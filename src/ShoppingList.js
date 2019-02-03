import React, { Component } from 'react';
import ListData from './ListData';
import './App.css';

class ShoppingList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            item: '',
            shoppingList: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();

        if (this.state.item !== ""){
            console.log("Submit", this.state.item);
            this.setState({
                shoppingList: [...this.state.shoppingList, this.state.item]
            });
        }
        console.log("list:", this.state.shoppingList);
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
                <ul style={{listStyleType: "none", textAlign:"left"}}>
                    {this.state.shoppingList.map((item, index) => {
                            return (
                                <li key={item + index}>{item}</li>
                            )
                        }

                    )}
                </ul>
            </div>
        );
    }
}

export default ShoppingList;