import React from "react";

const Teams = () => {
  return (
    <section id="section2" className='section_2 bg-gray-500 max-w-full h-screen flex flex-col  '>
      <ul className='flex gap-3 items-center text-xs bg-slate-800 p-3 '>
        <li className='lists active text-white text-xs font-bold  bg-gray-300 p-2 px-6 hover:text-slate-800 uppercase'>
          MOUNTAIN 1
        </li>
        <li className='lists text-white text-xs font-bold uppercase bg-gray-300 p-2 px-6 hover:text-slate-800 active'>
          MOUNTAIN 2
        </li>
      </ul>

      <div className='md:w-[25rem] w-[100%]   m-auto mt-[2rem] rounded-lg  bg-slate-50 p-[2rem] schedule md:pb-0 pb-[5rem] '>
        <div className='flex flex-col justify-center items-center gap-3'>
          <h1 className='text-3xl text-slate-800 uppercase font-extrabold self-start'>
            schedule
          </h1>
          <ul className='flex flex-col w-full'>
            <li className='flex justify-between items-center schedule_item'>
              <p className=''>25 nov 2016</p>
              <p className=''>vestibulum vieverra</p>
            </li>
            <li className='flex justify-between items-center schedule_item'>
              <p className=''>28 nov 2016</p>
              <p className=''>vestibulum vieverra</p>
            </li>
            <li className='flex justify-between items-center schedule_item my-3'>
              <p className=''>25 nov 2016</p>
              <p className=''>vestibulum vieverra</p>
            </li>
            <li className='flex justify-between items-center schedule_item'>
              <p className=''>7 jan 2017</p>
              <p className=''>vestibulum vieverra</p>
            </li>
          </ul>
        </div>
      </div>

      {/* footer */}
      <footer
        className={`max-w-[100%] w-full bg-gray-900 h-auto  p-3 flex justify-around items-center`}>
        <div className='flex-row-reverse flex items-center gap-2 '>
          <p className='md:w-[6rem]  uppercase text-slate-200  md:font-bold'>
            losangeles mountain
          </p>
          <div className='w-[2rem] h-[2rem] rounded-full bg-slate-50 p-2'></div>
        </div>
        <ul className='flex flex-wrap gap-3 items-center text-xs'>
          <li className='lists capitalize text-slate-300 active'>
            copyright2016
          </li>
          <li className='lists text-slate-300 active'>all right reserved</li>
        </ul>
      </footer>
    </section>
  );
};

export default React.memo(Teams)
