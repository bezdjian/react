import React from 'react';
import Link from '../../Link';

const CourseItem = ({
    title,
    author,
    description,
    topic,
    url,
    price
}) => (
        <div class="card">
            <div class="card-header">
                <h2>
                    <Link href={url}>{title}</Link>
                </h2>
            </div>
            <div class="card-body">
                <div className="card-title">
                    Topic: {topic}
                </div>
                <div class="card-text">
                    {description}
                </div>

                <div class="card-text">
                    {author && (
                        <small class="text-muted">
                            Author: <Link href={url}>{author}</Link>
                        </small>
                    )}
                </div>
                <div>
                    <small class="text-muted">
                        {price && (<span>Price: {price}</span>)}
                    </small>
                </div>
            </div>
        </div>
    );

export default CourseItem;