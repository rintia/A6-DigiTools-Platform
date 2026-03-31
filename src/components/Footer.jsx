import React from 'react';

const Footer = () => {
    return (
        
            <footer className="footer footer-horizontal footer-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-10 space-y-3">
  
  
    <div>
    <p className="font-bold text-4xl">
        Ready to Transform Your Workflow?
    </p>
    <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
    </div>

    <div className='flex gap-3'>
    <button className='btn text-violet-400 rounded-full'>Explore Products</button>
    <button className='btn text-white bg-transparent border-white rounded-full'>View Pricing</button>
    </div>
    
    <p>14-day free trial • No credit card required • Cancel anytime</p>
  
 
  
</footer>
    
    );
};

export default Footer;