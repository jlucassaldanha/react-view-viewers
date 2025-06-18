import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router';
import AuthPage from './pages/AuthPage.jsx';


const router = createBrowserRouter([
  {
    path: "/Viewers",
    element: <App />,
  },
  {
    path: "/Auth",
    element: <AuthPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
