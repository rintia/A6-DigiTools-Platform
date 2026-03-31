const NavBar = () => {
    return (
      <div className="navbar sticky z-10 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className=" font-bold text-xl">
             <h1 className="text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]  ">DigiTools</h1>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-10 px-1 text-lg">
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </div>
          <a className="btn btn-ghost">Login</a>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full text-white">Get Started</a>
        </div>
      </div>
    );
  };
  
  export default NavBar;