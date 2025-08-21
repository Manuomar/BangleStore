import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import { House, Store, ShoppingCart, Menu, X } from 'lucide-react'
import LoginBtn from './LoginBtn'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import {useAuth} from '../context/AuthContext' 



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
const {cartItems} = useCart();
const {isAuth} = useAuth();

const totalQuantity = cartItems.reduce((a,b)=>a+b.quantity,0)
  return (
    <nav className="w-full shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-30 h-15" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center font-bold">
          <NavLink 
            to='/' 
            className={({ isActive }) => (isActive ? "text-[var(--color-hover-in-nav)]" : '')}
          >
            <li className="cursor-pointer flex items-center gap-1 hover:text-[var(--color-hover-in-nav)] hover:text-[17px]">
              <House /> Home
            </li>
          </NavLink>
          <NavLink 
            to='/shop' 
            className={({ isActive }) => (isActive ? "text-[var(--color-hover-in-nav)]" : '')}
          >
            <li className="cursor-pointer flex items-center gap-1 hover:text-[var(--color-hover-in-nav)] hover:text-[17px]">
              <Store /> Shop
            </li>
          </NavLink>
          <NavLink 
            to='/cart' 
            className={({ isActive }) => (isActive ? "text-[var(--color-hover-in-nav)]" : '')}
          >
            <li className="cursor-pointer flex items-center gap-1 hover:text-[var(--color-hover-in-nav)] hover:text-[17px] relative">
              <ShoppingCart /> Cart
 {
  totalQuantity > 0 && ( <span style={{
    position: "absolute",
    top: "-10px",
    right: "-10px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    fontWeight: "bold",
  }}
>
  {totalQuantity}
</span>)}

            </li>
          </NavLink>
          <li>
            {isAuth?(<LoginBtn name={'login'} />):(<LoginBtn name={'logout'} />)}
            </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul 
          className="absolute top-full left-0 w-full md:hidden flex flex-col items-center gap-5 py-5 font-bold bg-white shadow-md border-t"
        >
          <NavLink to='/'
           className={({ isActive }) => (isActive ? "text-[var(--color-hover-in-nav)]" : '')}
          onClick={() => setIsOpen(false)}>
            <li className="cursor-pointer flex items-center gap-1"><House /> Home</li>
          </NavLink>
          <NavLink to='/shop'
           className={({ isActive }) => (isActive ? "text-[var(--color-hover-in-nav)]" : '')}
          onClick={() => setIsOpen(false)}>
            <li className="cursor-pointer flex items-center gap-1"><Store /> Shop</li>
          </NavLink>
          <NavLink to='/cart'
           className={({ isActive }) => (isActive ? "text-[var(--color-hover-in-nav)]" : '')}
          onClick={() => setIsOpen(false)}>
            <li className="cursor-pointer flex items-center gap-1"><ShoppingCart /> Cart</li>
          </NavLink>
          <li onClick={() => setIsOpen(false)}><LoginBtn name={'login'} /></li>
        </ul>
      )}
    </nav>
  )
}
