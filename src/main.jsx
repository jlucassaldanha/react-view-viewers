import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router';
import ConnectPage from './pages/ConnectPage.jsx';


const router = createBrowserRouter([
  {
    path: "/Viewers",
    element: <App />,
  },
  {
    path: "/",
    element: <ConnectPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
