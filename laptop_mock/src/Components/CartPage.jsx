import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../cartSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  if (cartItems.length === 0) {
    return <h3 className="text-center mt-5">Your cart is empty</h3>
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100">
              <img
                src={item.thumbnail || 'https://via.placeholder.com/200'}
                className="card-img-top"
                alt={item.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
