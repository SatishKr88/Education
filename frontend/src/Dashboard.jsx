import React, { useState } from 'react';

function Dashboard() {

  return (
    <>
      <div className='bg-[#348f6c] h-[100%] w-[100%] absolute flex'>
        <div className='h-[100%] w-[15%]'>
          <div className='mt-16 space-y-2'>
            <div className='border cursor-pointer rounded-xl flex items-center justify-center'> <button className='text-xl cursor-pointer font-medium'>Home</button></div>
            <div className='border cursor-pointer rounded-xl  flex items-center justify-center'><button className='text-xl cursor-pointer font-medium'>Student Manage</button></div>
            <div className='border cursor-pointer rounded-xl  flex items-center justify-center'><button className='text-xl cursor-pointer font-medium'>Teacher Manage</button></div>
            <div className='border cursor-pointer rounded-xl  flex items-center justify-center'><button className='text-xl cursor-pointer font-medium'>Course</button></div>
          </div>
        </div>

        <div className='bg-[#ffffff] h-[95%] w-[84%]  mt-4 rounded-xl'>

        </div>

      </div>
    </>
  )
};

export default Dashboard;
