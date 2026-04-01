
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cart from './components/Cart'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import Products from './components/Products'
import Rating from './components/Rating'

function App() {

  const [activeTab, setActiveTab] = useState('products')

  return (
    <>
      <NavBar />
      <Banner />
      <Rating />
      <div className='text-center mx-auto max-w-6xl mb-12'>
        <h1 className='text-3xl font-bold mb-6'>Premium Digital Tools</h1>
        <p>our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center gap-5 bg-transparent border-none mb-12">
        <input onClick={()=> setActiveTab('products')} type="radio" name="my_tabs_1" className={`tab rounded-full ${activeTab === 'products' && 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}`} aria-label="Products" defaultChecked />
        <input onClick={()=> setActiveTab('cart')} type="radio" name="my_tabs_1" className={`tab rounded-full ${activeTab === 'cart' && 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}`} aria-label="Cart" />
        
      </div>
      {activeTab === 'products' && <Products/>}
      {activeTab === 'cart' && <Cart/>}
      
      <Footer />
    </>
  )
}

export default App
