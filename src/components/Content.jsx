import React from 'react'
import Card from './Card'

function Content() {
  return (
    <section className='min-h-screen bg-gray-900 flex items-center justify-center flex-wrap gap-6 p-6'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </section>
  )
}

export default Content
