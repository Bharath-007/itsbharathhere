import React from 'react';
import { RouterProvider } from 'react-router-dom';  // Only RouterProvider
import { router } from './routes/routes';
import FloatingDock from './pages/components/FloatingDock';



const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
