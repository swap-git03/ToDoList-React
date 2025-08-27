import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ToDoProvider } from './context/ToDoContext'
import './app.css'


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<ToDoProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</ToDoProvider>
</React.StrictMode>
)