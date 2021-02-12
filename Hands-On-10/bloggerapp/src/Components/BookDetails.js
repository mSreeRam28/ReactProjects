import React, { Component } from 'react';

export class BookDetails extends Component {
    render() {
        return(
            <ul style={{listStyleType: 'none', padding: 0}}>
            {this.props.books.map((book) => {
                return(
                    <div id={book.id}>
                        <h3>{book.bname}</h3>
                        <h4>{book.price}</h4>
                    </div>
                )
            })}
            </ul>
        );
    }
}

export const Books = [{id: 1, bname:'Master React', price:670},
                            {id: 2, bname:'Deep Dive into Angular 11', price:800},
                            {id: 3, bname:'Mongo Essentials', price:450}];