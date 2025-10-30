import React from 'react'
import Panen from '../assets/SiapPanen.jpg'

function Card() {
  return (
    <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-gray-700/25 h-70 w-50 md:h-130 md:w-90">
      <img alt="" src={Panen} class="h:30 md:h-56 w-full object-cover"/>

  <div class="bg-white p-4 sm:p-6 dark:bg-gray-900">
    <a href="#">
      <h3 class="mt-0.5 text-lg text-gray-900 dark:text-white">
        Buku teknik beternak ayam
      </h3>
    </a>
    <h1 className='text-yellow-500 font-bold text-2xl'>Rp.25,000</h1>
    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
      Teknik beternak ayam ala peternak broiler dan ayam kampung dari ujung timur pulau jawa
    </p>
  </div>
</article>
  )
}

export default Card
