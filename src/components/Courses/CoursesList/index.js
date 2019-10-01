import React from 'react';
import CourseItem from '../CourseItem';

const CoursesList = ({ list }) => (
    <div class="container-fluid">
        <div key="lists" class="card-columns">
            {list.map((node) => (
                <CourseItem {...node} />
            ))
            }
        </div>
    </div>
)


export default CoursesList;