import React, { Component } from 'react';

export class CourseDetails extends Component {
    render() {
        return(
            <ul style={{listStyleType: 'none', padding: 0}}>
            {this.props.courses.map((course) => {
                return(
                    <div id={course.id}>
                        <h2>{course.cname}</h2>
                        <h4>{course.date}</h4>
                    </div>
                )
            })}
            </ul>
        );
    }
}

export const Courses = [{id: 1, cname:'Angular', date: '4/5/2021'},
                        {id: 2, cname:'React', date: '6/3/2020'}];