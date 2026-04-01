import React, { use } from 'react';
import ProductCard from './ProductCard'
const Products = ({productsPromise, cart, setCart}) => {
    const products = use(productsPromise)
    console.log(products);
    return (
        <div className='grid md:grid-cols-3 gap-4 max-w-7xl mx-auto'>
            
            {products.map(product => <ProductCard product={product} key={product.id} cart={cart} setCart={setCart}/>)}
        </div>
    );
};

export default Products;