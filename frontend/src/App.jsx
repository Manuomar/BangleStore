import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import LogIn from "./pages/LogIn"
import ProtectedRoute from "./components/ProtectedRoute"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
              
              } />
            <Route path="/checkout" element={
              <ProtectedRoute><Checkout /></ProtectedRoute>
              } />
            <Route path="/login" element={<LogIn/>} />
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
