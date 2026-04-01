import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({cart, setCart}) => {

    const totalPrice = cart.reduce((sum, item) => sum+item.price, 0)

    const handleRemove =(id)=>{
        const filteredCart = cart.filter(item=> item.id !== id)
        setCart(filteredCart)
        toast.success('Product removed from cart')
    }
    const handleCheckout =()=>{
        setCart([])
        toast.success('Checkout Successful')
    }

    return (
        <div className='max-w-7xl mx-auto mb-20'>
            {
                cart.length === 0 ?   <div className='flex justify-center items-center text-zinc-600 text-4xl font-bold'>
                    <h1>Your Cart Is Empty</h1>
            </div>
                :
                <div>
                    <div className='space-y-6'>
             {cart.map(item=> <div className='p-4  bg-zinc-200 rounded-lg flex justify-between'>
                <div className='flex gap-4'>
                    <img className='w-12 h-12' src={item.icon} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold'>{item.name}</h1>
                <h1>${item.price}/{item.period}</h1>
                </div>
                </div>
                <button onClick={()=> handleRemove(item.id)} className='btn btn-ghost text-red-500 font-semibold'>Remove</button>
            </div>)}
           </div>
           <div className='flex justify-between p-5 text-2xl'>
            <h1>Total:</h1>
           <h1>${totalPrice}</h1>
           </div>
           <button onClick={handleCheckout} className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full text-white btn-block">Proceed to Checkout</button>
                </div>
            }
          
           

        </div>
    );
};

export default Cart;