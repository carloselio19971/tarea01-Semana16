import React from 'react'
import { Menu } from './Menu'


export const Header = () => {
  return (
    <>
    <div className= "header bg-cover bg-center h-screen">
      <Menu></Menu>
    <div className='text-banner w-3/4 mx-auto text-white'>
      <h1 className='titulo-header text-7xl mb-5'>LEST'S TASTE PERFECTION</h1>
      <button className='text-white mt-10'>ORDER NOW</button>
    </div>
    </div>
    </>
  )
}

export default Header
