import React, { Component } from 'react';

const shoppingList = ["ham"];
class ListData extends Component {
    render() {
        return (
            <ul style={{listStyleType: "none", textAlign:"left"}}>
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