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
        this.handleClick = this.handleClick.bind(this);
    }

// Event that handles input of new item
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.item !== ""){
            this.setState({
                shoppingList: [...this.state.shoppingList, this.state.item],
                item: ''
            });
            ;
        } else {
            alert("Please enter an item");
        }
        //console.log("list:", this.state.shoppingList);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    //Event that removes/deletes item from shoppingList array
    handleClick(e){
        e.preventDefault();
        this.setState({
            shoppingList: this.state.shoppingList.filter(item => item !== e.target.value)
        });
        //console.log(this.state.shoppingList);
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
                                <li
                                    key={item + index}
                                    style={{paddingBottom: 15}}
                                >{item} <button onClick={this.handleClick} value={item}>Remove</button></li>
                            )
                        }

                    )}
                </ul>
            </div>
        );
    }
}

export default ShoppingList;