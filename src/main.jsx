import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from './providers/AuthProvider/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import router from './Router/Router.jsx';

// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router}>
        <ThemeProvider>
        </ThemeProvider>
      </RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
