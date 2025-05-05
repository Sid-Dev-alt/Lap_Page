import React, { useEffect, useState } from 'react'
import CardStyle from './CardStyle';
import axios from 'axios'
import laptopData from '../Utils/LaptopsData';

const CardList = () => {
    
     
    

  return (
    <div>
        <h2 className='mt-5'>Laptops</h2>
        <div className='container mt-4'>
            <div className='row justify-content-center'>
                {
                    laptopData.map((laptop)=>(
                        <CardStyle key = {laptop.id} laptop = {laptop} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CardList