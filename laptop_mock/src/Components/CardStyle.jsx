import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../cartSlice';

const CardStyle = ({laptop}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const isIncart = cartItems.some((item) => item.id === laptop.id);

  const handleCartClick = (e) => {
    e.preventDefault(); //Prevent Navigation if button is clicked
    if(isIncart){
      dispatch(removeFromCart(laptop.id))
    } else{
      dispatch(addToCart(laptop))
    }
  }

  return (
    <div className='col-md-4 mb-3'>
      <div className='card h-100 d-flex flex-column justify-content-between'>
        <Link to="/details"
            state={{laptop}}
            onClick={()=>localStorage.setItem('selectedLaptop',JSON.stringify(laptop))}
            style={{textDecoration: 'none', color: 'inherit'}}
        >   
       
            <div className='card-body text-center mt-3'>
                <img src={laptop.thumbnail || "https://via.placeholder.com/200" } 
                alt = {laptop.title}
                className="card-img-top"
                style={{ height: "275px",objectFit: "cover"}}
                />
                <h3 className='card-title'>
                    {laptop.id}. {laptop.title}
                </h3>
                <p className='card-text'>MRP: ${laptop.price}</p>
                <p className='card-text'>Rating: {laptop.rating ?? 'N/A'}</p>
                  
            </div>
        
        </Link>

        <div className='text-center mb-3'>
          <button className={`btn ${isIncart ? 'btn-danger': 'btn-success'} mt-2`} onClick={handleCartClick}>{isIncart ? 'Remove from Cart' : 'Add to Cart'}</button>
        </div>
    </div>
    </div>
  )
}

export default CardStyle