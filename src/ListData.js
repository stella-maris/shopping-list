import React, { Component } from 'react';

const shoppingList = [];
class ListData extends Component {
    render() {
        return (
            <ul>
                {shoppingList.map((item, index) => {
                    return (
                        <li key={item + index}>{item}</li>
                    )
                    }

                )}
            </ul>
        );
    }
}

export default ListData;