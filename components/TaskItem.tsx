import React from 'react'
import Image from 'next/image'
import pclc from '../assets/pclc-logo.png'
import cheonbo from '../assets/cheonbo-logo.png'
import ConditionalLogoDisplay from './ConditionalLogoDisplay'

interface TaskItemProps {
  taskName: string
  assignedTo: string
  task: string
  priority: string
  organization?: string
}

const TaskItem = ({
  taskName,
  assignedTo,
  task,
  priority,
  organization,
}: TaskItemProps) => {
  return (
    <div className='bg-zinc-950 px-7 pt-7 pb-14 relative cursor-pointer hover:scale-105 transition duration-200'>
      {organization?.toLowerCase() === 'pclc' && (
        <Image
          className='w-14 absolute right-7 top-4'
          src={pclc}
          alt=''
          width={400}
          height={400}
        />
      )}
      <ConditionalLogoDisplay organization={organization} />

      <h4 className='text-white text-xl font-semibold mb-1 capitalize'>
        {taskName}
      </h4>
      <p className='text-white text-xs mb-3 italic'>
        Assigned to: {assignedTo}
      </p>
      <p className='text-gray-300 text-sm'>{task}</p>
      {/* badge */}
      <div className='absolute right-0 bottom-0 flex justify-end w-full ps-7 pb-1'>
        <p
          className={`${priority === 'low' && 'bg-green-400 text-green-900'} ${
            priority === 'medium' && 'bg-yellow-400 text-yellow-900'
          } ${
            priority === 'high' && 'bg-red-400 text-red-900'
          } px-4 py-1 text-sm font-semibold`}
        >
          {priority} priority
        </p>
      </div>
    </div>
  )
}

export default TaskItem
