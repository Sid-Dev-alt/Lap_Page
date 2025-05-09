import React from 'react'
import { useSelector } from "react-redux";
import CardStyle from "../Components/CardStyle";

const WishList = () => {
    const wishlist = useSelector(state => state.wishlist)
  return (
    <div className="container mt-3">
      <h4>Wishlist</h4>
      <div className="row">
        {wishlist.length === 0 ? (
          <p>Your Wishlist is empty</p>
        ) : (
          wishlist.map((laptop) => (
            <CardStyle key={laptop.id} laptop={laptop} />
          ))
        )}
      </div>
    </div>
  );
}

export default WishList