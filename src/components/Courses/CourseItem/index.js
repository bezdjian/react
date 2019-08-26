import React from 'react';
import Link from '../../Link';

const CourseItem = ({
                        title,
                        author,
                        description,
                        topic,
                        url
                    }) => (
    <div>
        <div className="RepositoryItem-title">
            <h2>
                <Link href={url}>{title}</Link>
            </h2>
        </div>

        <div className="RepositoryItem-description">
            <div className="topic">
                Topic: {topic}
            </div>
            <div
                className="RepositoryItem-description-info"
                dangerouslySetInnerHTML={{__html: description}}
            />
            <div className="RepositoryItem-description-details">
                <div>
                    {author && (
                        <span>
                            Author: {author}
                        </span>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default CourseItem;