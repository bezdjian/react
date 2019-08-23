import React from 'react';

const ErrorMessage = ({ error }) => (
    <div className="errorMessage">
        <small>{error.toString()}</small>
    </div>
);

export default ErrorMessage;