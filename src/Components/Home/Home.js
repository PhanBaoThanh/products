import React from 'react'
import './home.scss'
import { Link } from "react-router-dom";

const Home = ({data}) => {
    return (
        <div className='container'>
            <div className="header">
                <h2>Our Products <div className='line'></div></h2>
            </div>

            <div className='products'>
            {
                data.map((item,index) => (
                    <Link to={`/${item.id}`} className='product' key={index}>
                        <div className='img'>
                            <img src={item.img} alt='ptc' />
                        </div>
                        <p className='productName'>{item.name}</p>
                        <p className='productCost'>${item.cost}</p>
                    </Link>
                ))
            }
        </div>
        </div>
    )
}

export default Home