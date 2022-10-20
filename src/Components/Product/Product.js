import React from 'react'
import './product.scss'
import {useParams,Link} from 'react-router-dom'

const Product = ({data}) => {
  const {productId} = useParams()
  const value = data.find(item => item.id.toString() === productId)

  return (
    <div className='containerProduct'>
      <Link to={'/'} className='btnBack'>Back Home</Link>

      <div className='content'>
        <div className='img'>
          <img src={value.img} alt='ptc' />
        </div>

        <div className='text'>
          <h3 className='headerText'>{value.name}</h3>
          <p className='type'>{value.type}</p>
          <p className='cost'>{value.cost}</p>
          <div className='colors'>
            {
              value.color.map((item,index) => (
                <div className='color' key={index} style={{backgroundColor: `${item}`}}></div>
              ))
            }
          </div>

          <p className='description'>{value.description}</p>
          <button className='textBtn'>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product