import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Cart extends Component {
    render(){ let itemsList = (
        this.props.item.map((item) => {
            return(
                <tr>
                    <td> {item.itemName} </td>
                    <td> {item.price} </td>
                </tr>
        )})
    )
    itemsList.unshift(<tr><th>Name</th><th>Price</th></tr>)
    return itemsList}
}

Cart.propTypes = {
    itemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

Cart.defaultProps = {
    itemName: '',
    price: 0,
};