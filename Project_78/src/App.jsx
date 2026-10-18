import Navbar from "./components/Navbar"
import HomeLayout from "./layouts/HomeLayout"
import HomePage from "./pages/HomePage"
import {Routes,Route} from "react-router-dom"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Private from "./pages/Private"
import ProtectedLayout from "./layouts/ProtectedLayout"
import Cart from "./pages/Cart"
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
      
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/home" element={<HomePage />} />
      <Route path="/products" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />}/>
      <Route path="/private" element={<ProtectedLayout />}>
        <Route index element={<Private />} />
        
      </Route>
      
    </Routes>
    </>
    
  )
}

export default App