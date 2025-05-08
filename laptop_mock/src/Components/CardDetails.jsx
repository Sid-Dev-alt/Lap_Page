import React,{useState, useEffect} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../cartSlice';

const CardDetails = () => {

    const {state} = useLocation()
    const [laptop, setLaptop] = useState(state?.laptop || null);
    
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
   
   
   useEffect(()=>{
    if(!laptop) {
        const storedLaptop = localStorage.getItem('selectedLaptop');
        if(storedLaptop){
            setLaptop(JSON.parse(storedLaptop));
        }
    }
   }, [laptop]);

   if (!laptop) return <p>No laptop data found.</p>;


  return (
    <div className='container mt-5'>
        <Link to='/' className='btn btn-danger mb-3'>
            Go Back
        </Link>

        <div className='card'>
                <div className='card-body text-center'>
                    <img src={laptop.thumbnail || "https://placeholder.com"}
                    alt={laptop.title}
                    style={{height: "400px", objectFit: "cover"}}
                    />
                    <h5 className='mt-3'>{laptop.title}</h5>
                    <p>{laptop.description}</p>
                    <p><strong>MRP:</strong> ${laptop.price}</p>
                        
                        
                    <p><strong>Warranty Information:</strong> 
                        {laptop.warrantyInformation}
                    </p>
                   
                    <p><strong>Shipping Status:</strong> {laptop.shippingInformation}</p> 
                    <p> <strong>Availablity:</strong>  {laptop.availabilityStatus}</p>

                     <p className='card-text'><strong>Rating:</strong> {laptop.rating ?? 'N/A'}</p>
                    <div className='text-center mb-3'>
          <button className={`btn ${isIncart ? 'btn-danger': 'btn-success'} mt-2`} onClick={handleCartClick}>{isIncart ? 'Remove from Cart' : 'Add to Cart'}</button>
        </div>
                </div>
            </div>
    </div>
  )
}

export default CardDetails