import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ProductCard = ({product, cart, setCart}) => {

  const[isBought, setIsBought] = useState(false)

  const handleBuy =()=>{
    const isFound = cart.find(item=> item.id === product.id)
    if(isFound){
      toast.warning('Product Already Added to Cart')
      return
    }
    setCart([...cart, product])
    setIsBought(!isBought)
    toast.success('Product Added to Cart')
  }

    return (
        <div className="card bg-base-100 shadow-sm">
         
  <div className="card-body">
       <div className='flex justify-between items-center'>
        <img src={product.icon} className='w-12 h-12' alt="" />
    <span className="badge badge-xs badge-warning">{product.tag}</span>
       </div>
    <div className="">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      
      <p>{product.description}</p>
      <h1 className="text-xl">${product.price}/{product.period}</h1>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
        {product.features.map(f=><li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{f}</span>
      </li> )}
     
       
    </ul>
    <div className="mt-6">
      <button onClick={handleBuy} className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full text-white btn-block">{isBought ? 'Added to Cart' : 'Buy Now'}</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;