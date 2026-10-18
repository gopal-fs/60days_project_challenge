
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {  AuthProvider } from './context/Auth.jsx'
import {Toaster} from "react-hot-toast"
import { CartProvider } from './context/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <CartProvider>
      <App />
    </CartProvider>

  </AuthProvider>
   
   <Toaster position='top center' />
  </BrowserRouter>
   
  
)
