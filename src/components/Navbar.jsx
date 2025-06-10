import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-gray-800 text-white p-5'>
    <li className='text-2xl font-bold float-left'>My Website</li>
      <ul className='flex justify-around w-[80%] items-center space-x-4'>
        <li className='hover:text-sky-700 active:bg-amber-700'><a href="/">Home</a></li>
        <li className='hover:text-sky-700'><a href="/recipes">Recipes</a></li>
        <li className='hover:text-sky-700'><a href="/createRecipe">Create Recipe</a></li>
        <li className='hover:text-sky-700'><a href="/about">About</a></li>
      </ul>
    </nav>
  )
}

export default Navbar