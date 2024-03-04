import React from "react";

const NavBar = ({ Title }) => {
  return (
    <nav
      className={`w-[100%] top-0 left-0 right-0 h-auto text-white p-3 flex justify-around items-center fixed`}>
      <div className='flex-row-reverse flex items-center gap-2'>
        <p className='w-[6rem] uppercase text-slate-900 font-bold'>{Title}</p>
        <div className='w-[2rem] h-[2rem] rounded-full bg-slate-50 p-2'></div>
      </div>
      <ul className='flex gap-3 items-center text-xs'>
        <li className='lists active'>
          <a href='#section1'>history</a>
        </li>
        <li className='lists active'>
          <a href='#section2'>team</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
