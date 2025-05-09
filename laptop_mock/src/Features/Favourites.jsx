import React from 'react'
import { useSelector } from 'react-redux'
import CardStyle from '../Components/CardStyle'

const Favourites = () => {
    const favourites = useSelector(state => state.favourites);
  return (
    <div className='container mt-3'>
        <h4>Your Favourite Laptops</h4>
        <div className='row'>
            {favourites.length === 0 ? (
                <p>No Favourites yet.</p>
            ): (
                favourites.map(laptop => (
                    <CardStyle key={laptop.id} laptop={laptop} />
                ))
            )}
        </div>
    </div>
  )
}

export default Favourites