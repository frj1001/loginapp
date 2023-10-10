import React from 'react'
import { useNavigate } from 'react-router-dom'


function Products() {
  const navigation = useNavigate()

  function handleClick(){       //logout function
    navigation('/login')
    localStorage.setItem('usertoken', 'false')      //setting flag again to false when logged out
  }

  return (
    <div className='products'>
      <h1>Products</h1>
      <div className='product'>
        <div className='item'>
          <div className='image'>
            <img src="https://www.parkerpawn.com/wp-content/uploads/2023/08/electronic-gadgets.jpeg" width="100%" height="100%"  alt="electronics" />
          </div>
          <div className='description'>
            Electronics
          </div>
        </div>
        <div className='item'>
          <div className='image'>
            <img src="https://image.shutterstock.com/image-photo/beautiful-colorful-clothes-flying-isolatedwomens-260nw-2257875171.jpg" width="100%" height="100%" alt="clothing" />
          </div>
          <div className='description'>
            Clothing
          </div>
        </div>
        <div className='item'>
          <div className='image'>
          <img src="https://hips.hearstapps.com/hmg-prod/images/classic-accessories-1516305397.jpg" width="100%" height="100%" alt="Accessories" />
          </div>
          <div className='description'>
            Accessories
          </div>
        </div>
      </div>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Products
