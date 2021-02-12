import React, { Component } from 'react';

export class BlogDetails extends Component {
    render() {
        return(
            <ul style={{listStyleType: 'none', padding: 0}}>
            {this.props.blogs.map((blog) => {
                return(
                    <div id={blog.id}>
                        <h2>{blog.blogname}</h2>
                        <h3>{blog.author}</h3>
                        <p>{blog.description}</p>
                    </div>
                )
            })}
            </ul>
        );
    }
}

export const Blogs = [{id: 1, blogname:'React Learning', author: 'Stephen Biz', description: 'Welcome to learning React!'},
                        {id: 2, blogname:'Installation', author: 'Schewzdenier', description: 'You can install React from npm.'}];