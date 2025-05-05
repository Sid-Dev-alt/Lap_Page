import React,{useState, useEffect} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';

const CardDetails = () => {

    const {state} = useLocation()
    const [laptop, setLaptop] = useState(state?.laptop || null);
    
   
   
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
                    {/* <button className='btn btn-success mt-3' onClick={()=>addToCart(recipe)}>Add to Cart</button> */}
                </div>
            </div>
    </div>
  )
}

export default CardDetails