import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {AuthState,ContextProvider} from './context/useContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ContextProvider>
  <AuthState>

<App/>
</AuthState>

  </ContextProvider>
    
    
  </BrowserRouter>
)
