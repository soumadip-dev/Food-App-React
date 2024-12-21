import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx'; // About page component
import Body from './components/Body.jsx'; // Body component displaying main content
import Cart from './components/Cart.jsx'; // Cart page component
import Contact from './components/Contact.jsx'; // Contact page component
import Error from './components/Error.jsx'; // Error page component
import Header from './components/Header.jsx'; // Header component with navigation
import RestaurantMenu from './components/RestaurantMenu.jsx'; // Restaurant menu component

// Main App Layout Component (Header and Footer included here)
const AppLayout = () => {
  return (
    <div className="app">
      <Header /> {/* Header section */}
      <Outlet /> {/* Nested routes will be rendered here */}
      <footer className="footer">
        <p>© 2024 Rasoii. All rights reserved.</p> {/* Footer Section */}
      </footer>
    </div>
  );
};

// Setting up routes using react-router
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // Main layout for the app
    children: [
      { path: '/', element: <Body /> }, // Body for the home page
      {
        path: '/about',
        element: <About />, // About page
      },
      {
        path: '/contact',
        element: <Contact />, // Contact page
      },
      {
        path: '/cart',
        element: <Cart />, // Cart page for shopping items
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />, // Restaurant menu page with dynamic restaurant ID
      },
    ],
    errorElement: <Error />, // Error page in case of invalid routes
  },
]);

// Render the main App with the RouterProvider to handle routing
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
