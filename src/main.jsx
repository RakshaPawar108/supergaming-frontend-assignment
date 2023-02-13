import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider, UnitsProvider } from './context'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UnitsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UnitsProvider>
    </AuthProvider>
  </React.StrictMode>
);
