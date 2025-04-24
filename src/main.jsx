import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './styles/index.css';
import App from './pages/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>
);