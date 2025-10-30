import React from 'react'
import YourSvg from '../assets/Anvil.jsx';

function Header() {
  return (
 <header class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <a class="text-yellow-500 flex items-center justify-center" href="#">
            <span class="sr-only">Home</span>
             <YourSvg size={10}/>
          <h1 className='ml-2 text-4xl font-bold'>Forge</h1>
          </a>
        </div>
  
        <div class="md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-xl">
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">
                  About
                </a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">
                  Members
                </a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">
                  Benefit
                </a>
              </li>
  
            </ul>
          </nav>
        </div>

      </div>
    </div>
  </header>
  )
}

export default Header
