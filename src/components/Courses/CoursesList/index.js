import React from 'react';
import CourseItem from '../CourseItem';

const CoursesList = ({list}) =>
    list.map((node) => (
        <div key={node._id} className="RepositoryItem">
            <CourseItem {...node}/>
        </div>
    ));

export default CoursesList;