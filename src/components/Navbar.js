import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='bg-charcoal p-4 text-center font-source-sans text-gray-50'>
      <Link to='/'>
        <h3 className='text-3xl font-normal'>
          <span>Cases of COVID-19 changing in my region</span>
        </h3>
          <span>Made by Happy Chen</span>
      </Link>
    </div>
  );
};

export default Navbar;
