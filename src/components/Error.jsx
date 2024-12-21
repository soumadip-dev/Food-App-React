import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError(); // Hook to fetch the error details from the router

  return (
    <div className="error-container">
      <div className="error-content">
        {/* Error Heading */}
        <h1 className="error-heading">Oops❗</h1>
        <h2 className="error-subheading">Something went wrong.</h2>

        {/* Displaying error details if available */}
        <p className="error-description">
          {error?.status} - {error?.statusText || 'Unknown Error'}
        </p>

        {/* Generic error message */}
        <p className="error-message">
          We are sorry, but it seems like something unexpected occurred. Please
          try again later or contact support if the issue persists.
        </p>

        {/* Link to navigate back to the home page */}
        <a href="/" className="error-link">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
