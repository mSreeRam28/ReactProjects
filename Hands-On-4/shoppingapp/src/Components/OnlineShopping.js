import React, { Component } from 'react';
import { Cart } from '../Components/Cart.js';
import '../Stylesheets/mystyle.css'

export class OnlineShopping extends Component {
    render() {
        const CartInfo = [{itemName:"Laptop", price:80000},
                            {itemName:"TV", price:120000},
                            {itemName:"Washing Machine", price:50000},
                            {itemName:"Mobile", price:30000},
                            {itemName:"Fridge", price:70000},];
        return(
            <div className='mydiv'>
                <Cart item={CartInfo}/>
            </div>
        )
    }   
}