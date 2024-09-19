import React from 'react';

const ErrorNotification = ({ message }) => {
  return (
    <div className="error-notification">
      <strong>Error:</strong> {message || "An unexpected error occurred."}
    </div>
  );
};

export default ErrorNotification;
