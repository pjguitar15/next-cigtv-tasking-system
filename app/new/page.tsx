import NewForm from '@/components/new-page/NewForm'
import React from 'react'

const page = () => {
  return (
    <main className='bg-zinc-900 h-screen py-7'>
      <div className='container mx-auto'>
        <h1 className='text-white text-3xl mb-3'>Add New Task</h1>
        <NewForm />
      </div>
    </main>
  )
}

export default page
