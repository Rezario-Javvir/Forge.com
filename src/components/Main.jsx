import React from 'react'
import Jago from "../assets/Jago.jpg"


function Main() {
  return (
    <section className='h-screen flex items-center bg-gray-800'>
      <div class="w-full h-full">
        <div class="flex flex-col md:flex-row w-full h-full"> 
          
          <div class="w-full h-1/3 md:h-full md:w-1/2 flex items-center justify-center flex-col">
            <div class="max-w-prose md:max-w-none p-4 w-full md:w-1/2"> 
              <h2 class="text-2xl font-semibold text-yellow-400 sm:text-3xl">
                 Jadi gini le ini berisi penjelasan.
              </h2>
    
              <p class="mt-4 text-white">
                Teknik ternak ayam terbaru 2025
              </p>
            </div>
          </div>
    
          <div class="h-2/3 w-full md:h-full md:w-1/2 overflow-hidden p-7">
            <img src={Jago} alt="" className='object-cover w-full h-full rounded-md object-center'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main