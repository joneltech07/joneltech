import React from 'react'

function Navbar() {
    
    const menuItems = ['Home', 'Resume', 'Projects', 'Contact']

  return (
    <nav className='flex justify-between px-6 sm:px-14 items-center py-1'>
        <div className='flex items-center justify-center aspect-square w-10 h-10 rounded-full bg-[#0d97c5] shadow'>
            <h1 className='font-bold text-white p-0'>JT</h1>
        </div>
        <div className='flex gap-5'>
            {menuItems.map((item, idx) => (
                <div key={idx}>{item}</div>
            ))}
        </div>
    </nav>
  )
}

export default Navbar;