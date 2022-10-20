import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from './Components/Product/Product'
import Home from './Components/Home/Home'
import img1 from './img/product-1.jpeg'
import img2 from './img/product-2.jpeg'
import img3 from './img/product-3.jpeg'
import img4 from './img/product-4.jpg'
import img5 from './img/product-5.jpg'
import img6 from './img/product-6.jpeg'
import img7 from './img/product-7.jpg'
import img8 from './img/product-8.jpg'
import img9 from './img/product-9.jpg'
import img10 from './img/product-10.jpg'
import img11 from './img/product-11.jpeg'
import img12 from './img/product-12.jpg'
function App() {
  const data=[
    {
      id: 1,
      name: 'High-Back Bench',
      cost: 9.99,
      type: 'Ikea',
      color: ['#f15025','#222'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img1
    },
    {
      id: 2,
      name: 'Albany Table',
      cost: 79.99,
      type: 'Marcos',
      color: ['#f15025','#222'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img2
    },
    {
      id: 3,
      name: 'Accent Chair',
      cost: 25.99,
      type: 'Caressa',
      color: ['#222','#0000ff','#f15025'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img3
    },
    {
      id: 4,
      name: 'Wooden Table',
      cost: 45.99,
      type: 'Caressa',
      color: ['#f15025','#0000ff'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img4
    },
    {
      id: 5,
      name: 'Dining Table',
      cost: 6.99,
      type: 'Caressa',
      color: ['#ff0000','#f15025'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img5
    },
    {
      id: 6,
      name: 'Sofa Set',
      cost: 69.99,
      type: 'Liddy',
      color: ['#0000ff'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge      ',
      img: img6
    },
    {
      id: 7,
      name: 'Modern Bookshelf',
      cost: 8.99,
      type: 'Marcos',
      color: ['#00ff00','#f15025','#ff0000'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img7
    },
    {
      id: 8,
      name: 'Emperor Bed',
      cost: 21.99,
      type: 'Liddy',
      color: ['#f15025'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img8
    },
    {
      id: 9,
      name: 'Utopia Sofa',
      cost: 39.95,
      type: 'Marcos',
      color: ['#00ff00','#0000ff'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img9
    },
    {
      id: 10,
      name: 'Entertainment Center',
      cost: 29.98,
      type: 'Liddy',
      color: ['#ff0000','#00ff00'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img10
    },
    {
      id: 11,
      name: 'Albany Sectional',
      cost: 10.99,
      type: 'Ikea',
      color: ['#ff0000','#00ff00'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img11
    },
    {
      id: 12,
      name: 'Leather Sofa',
      cost: 9.99,
      type: 'Liddy',
      color: ['#222'],
      description: 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
      img: img12
    }
  ]
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home data={data} />}/>
        <Route path='/:productId' element={<Product data={data} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
