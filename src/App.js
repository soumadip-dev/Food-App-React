import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import Body from './components/Body.jsx'; // Body Component
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import Header from './components/Header.jsx'; // Header Component

// Main App Layout Component
const AppLayout = () => {
  return (
    <div className="app">
      <Header /> {/* Header Section */}
      <Body /> {/* Body Section */}
      <footer className="footer">
        <p>© 2024 Rasoii. All rights reserved.</p> {/* Footer Section */}
      </footer>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
