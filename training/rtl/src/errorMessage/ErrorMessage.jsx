import React from 'react';

const ErrorMessage = ({ message = "Something went wrong" }) => {
    return (
        <div data-testId="message-container">{message}</div>
    )
}

export default ErrorMessage;