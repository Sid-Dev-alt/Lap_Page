import React,{useState, useEffect, useRef} from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../cartSlice';
import '../Styles/CartDetails.css'
import { addToFavourites, removeFromFavourites } from '../Features/FavouriteSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { addToWishlist, removeFromWishlist } from '../Features/WishListSlice';

const CardDetails = () => {

    const {state} = useLocation()
    const [laptop, setLaptop ] = useState(state?.laptop || null);
    
    const zoomRef = useRef(null)

    const handleMouseMove = (e) => {
      const {left, top, width, height} = zoomRef.current.getBoundingClientRect()
      const x = ((e.pageX - left -window.scrollX) / width) * 100
      const y = ((e.pageY - top -window.scrollY) / height) * 100
     zoomRef.current.style.transformOrigin = `${x}% ${y}`
    }

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

     const favourites = useSelector(state => state.favourites);
     const isFavourited = favourites.some(item => item.id === laptop.id);

     const handleFavouriteClick = () => {
      if(isFavourited) {
        dispatch(removeFromFavourites(laptop.id));
      } else{
        dispatch(addToFavourites(laptop));
      }
     };

     const wishlist = useSelector(state => state.wishlist);
     const isWishlist = wishlist.some(item => item.id === laptop.id);

     const handleWishlistClick = () => {
      if(isWishlist) {
        dispatch(removeFromWishlist(laptop.id));
      } else{
        dispatch(addToWishlist(laptop));
      }
     };
   
   
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
    <div className="container mt-5">
      <Link to="/" className="btn btn-danger mb-3">
        Go Back
      </Link>

      <div className="card">
        <div
          className="zoom-wrapper mt-3 mx-auto"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => (zoomRef.current.style.transform = "scale(2)")}
          onMouseLeave={() => (zoomRef.current.style.transform = "scale(1)")}
        >
          <div className="card-body text-center">
            <img
              src={laptop.thumbnail || "https://placeholder.com"}
              alt={laptop.title}
              style={{ height: "400px", objectFit: "cover" }}
              // ref={zoomRef}
              className="zoom-image-hover"
            />
          </div>
          <div className="text-center">
            <h5 className="mt-3">{laptop.title}</h5>
            <p>{laptop.description}</p>
            <p>
              <strong>MRP:</strong> ${laptop.price}
            </p>

            <p>
              <strong>Warranty Information:</strong>
              {laptop.warrantyInformation}
            </p>

            <p>
              <strong>Shipping Status:</strong> {laptop.shippingInformation}
            </p>
            <p>
              {" "}
              <strong>Availablity:</strong> {laptop.availabilityStatus}
            </p>

            <p className="card-text">
              <strong>Rating:</strong> {laptop.rating ?? "N/A"}
            </p>
          </div>
          <div className="text-center mb-3">
            <button
              className={`btn ${isIncart ? "btn-danger" : "btn-success"} mt-2`}
              onClick={handleCartClick}
            >
              {isIncart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
          <div className="text-center mb-3">
            <button
              className={`btn ${
                isFavourited ? "btn-warning" : "btn-outline-warning"
              } mt-2`}
              onClick={handleFavouriteClick}
            >
              <FontAwesomeIcon
                icon={isFavourited ? solidHeart : regularHeart}
                className="me-2"
              />
              {isFavourited ? "Remove from Favourites" : "Add to Favourites"}
            </button>
          </div>

          <div className="text-center mb-3">
            <button
              className={`btn ${
                isWishlist ? "btn-danger" : "btn-outline-warning"
              } mt-2`}
              onClick={handleWishlistClick}
            >
              <FontAwesomeIcon
                icon={isWishlist ? solidHeart : regularHeart}
                className="me-2"
              />
              {isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails