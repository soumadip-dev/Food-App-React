import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-heading">Oops❗</h1>
        <h2 className="error-subheading">Something went wrong.</h2>
        <p className="error-description">
          {error.status} - {error.statusText}
        </p>
        <p className="error-message">
          We are sorry, but it seems like something unexpected occurred. Please
          try again later or contact support if the issue persists.
        </p>
        <a href="/" className="error-link">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
