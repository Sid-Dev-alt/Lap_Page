import React, { useEffect, useState } from 'react'
import CardStyle from './CardStyle';
import axios from 'axios'
import laptopData from '../Utils/LaptopsData';

const CardList = () => {
    
     const [brandFilter, setBrandFilter] = useState('');

     const brands = [...new Set(laptopData.map(l => l.brand))];

     const filteredLaptops = brandFilter?laptopData.filter(laptop=>laptop.brand === brandFilter):laptopData;
    

  return (
    <div>
        <div className='container mt-5'>
            <div className='text-center mb-4'>
        <h2 className='mt-5'>Laptops</h2>
        </div>
        <div className='row'>
            <div className='col-md-2'>
            <h5>Filter by brand</h5>
            <ul className='list-group'>
            <li
            className={`list-group-item ${brandFilter === '' ? 'active':''}`}
            onClick={() => setBrandFilter('')}
            style={{cursor: 'pointer'}}
            >
                All Brands
            </li>
            {brands.map((brand, index) => (
                <li key={index} className={`list-group-item ${brandFilter === brand ? 'active': ''}`} onClick={() => setBrandFilter(brand)} style={{cursor: 'pointer'}}>{brand}</li>
            ))}
            </ul>
        </div>
        <div className='col-md-10'>
            <div className='row'>
                {
                    filteredLaptops.map((laptop)=>(
                        <CardStyle key = {laptop.id} laptop = {laptop} />
                    ))
                }
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default CardList