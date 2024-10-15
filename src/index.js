import React from 'react';
// ReactDOM is responsible for rendering React components into the DOM (Document Object Model). 
import ReactDOM from 'react-dom/client';
// The App component is typically root component of your React application. It serves as the primary container for all other components
import App from './App';

//createRoot--  Initializes a React root for rendering.-- is the new method to create a root for rendering React components. It replaces the older ReactDOM.render method and supports concurrent features, enabling better performance and user experience.
const root = ReactDOM.createRoot(document.getElementById('root'));
//Renders React elements into the DOM.
root.render(
  //React.StrictMode- tool for highlighting potential problems in application. It doesn't render any visible UI but activates checks and warnings for its child components.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);