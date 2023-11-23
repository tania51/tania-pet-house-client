import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/router.jsx';

import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from './providers/AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <ThemeProvider>
        </ThemeProvider>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
