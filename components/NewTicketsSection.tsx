import React from 'react'
import Link from 'next/link'

const NewTicketsSection = () => {
  return (
    <main className='py-7 flex justify-between items-center'>
      <div>
        <h3 className='text-white text-2xl font-semibold'>Tasks</h3>
        <p className='text-gray-400 text-sm mt-1'>Currently open tasks</p>
      </div>
      <div>
        <Link
          href='/new'
          className='bg-red-600 text-white px-5 py-2 h-auto text-sm'
        >
          New Task
        </Link>
      </div>
    </main>
  )
}

export default NewTicketsSection
