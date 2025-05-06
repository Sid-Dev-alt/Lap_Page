import React from 'react'
import { Link } from 'react-router-dom'
// import { useCart } from '../Content/CartContent';

const CardStyle = ({laptop}) => {
  return (
    <div className='col-md-4 mb-3'>
        <Link to="/details"
            state={{laptop}}
            onClick={()=>localStorage.setItem('selectedLaptop',JSON.stringify(laptop))}
        >   
        <div className='card card-center h-100'>
            <div className='card-body text-center mt-6'>
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
                  {/* <button className='btn btn-success mt-3' onClick={()=>addToCart(recipe)}>Add to Cart</button> */}
            </div>
        </div>
        </Link>
    </div>
  )
}

export default CardStyle