import React from 'react'
import TaskItem from './TaskItem'

const getTasks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch tasks.')
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const TaskList = async () => {
  const { tasks } = await getTasks()
  console.log(tasks)
  return (
    <main className='grid lg:grid-cols-2 gap-5'>
      {tasks.map((item: any, index: number) => (
        <TaskItem
          key={index}
          taskName={item.taskName}
          assignedTo={item.assignedTo}
          task={item.description}
          priority={item.priority}
          organization={item.organization}
        />
      ))}
    </main>
  )
}

export default TaskList
