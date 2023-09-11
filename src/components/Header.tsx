import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-16 flex items-center bg-gradient-to-b from-white to-blue-50 border-black border-opacity-30 border-b'>
        <header className='max-w-6xl mx-auto'>
            <h2 className='text-black text-xl font-medium'>
                <Link href='/'>Home</Link>
            </h2>
        </header>
    </div>
  )
}

export default Header