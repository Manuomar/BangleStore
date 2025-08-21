import React from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
const {isAuth} = useAuth();
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {(cartItems.length === 0)&&(isAuth) ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border rounded p-4 shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Price: ₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <label>Qty:</label>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 border rounded px-2 py-1"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ₹{totalPrice.toFixed(2)}</p>
            <button
              disabled
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded opacity-50 cursor-not-allowed"
            >
              Proceed to Checkout (Coming Soon)
            </button>
          </div>
        </>
      )}
    </div>
  );
}
