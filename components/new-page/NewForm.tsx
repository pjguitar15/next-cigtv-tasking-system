'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

// Array of option values
const ORG_OPTIONS = ['Cheonbo', 'UPF', 'PCLC']

const ASSIGNED_TO_OPTIONS = [
  'Peter Herman Caga',
  'Venjie Takeshi Valiente',
  'Philcob Suzuki Josol',
  'Mark Kevin Rivera',
  'Dahrie Roger',
  'Kendrick Apole',
  'Akinori Caro',
]
const PRIORITY_OPTIONS = ['low', 'medium', 'high']

const NewForm = () => {
  const [taskNameInput, setTaskNameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const [orgOption, setOrgOption] = useState('Cheonbo')
  const [assignedToOption, setAssignedToOption] = useState('Peter Herman Caga')
  const [priorityOption, setPriorityOption] = useState('low')
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const addTask = async (
    taskName: string,
    description: string,
    organization: string,
    assignedTo: string,
    priority: string
  ) => {
    try {
      const res = await fetch(`http://localhost:3000/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-type': 'application-json',
        },
        body: JSON.stringify({
          taskName,
          description,
          organization,
          assignedTo,
          priority,
        }),
      })

      if (res.ok) {
        alert('Add success!')
        router.push('/')
      } else {
        throw new Error(`Failed to create a task`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const validForm =
    taskNameInput &&
    descriptionInput &&
    orgOption &&
    assignedToOption &&
    priorityOption
  const submitHandler = async (event: any) => {
    event.preventDefault()

    if (validForm) {
      await addTask(
        taskNameInput,
        descriptionInput,
        orgOption,
        assignedToOption,
        priorityOption
      )
      console.log(taskNameInput)
      console.log(descriptionInput)
      console.log(orgOption)
      console.log(assignedToOption)
      console.log(priorityOption)
      setErrorMessage('')
    } else {
      setErrorMessage('Please complete the form')
    }
  }
  return (
    <div>
      <form onSubmit={submitHandler} className='lg:w-3/4 xl:w-2/4'>
        <div className='mb-4'>
          <label className='text-white' htmlFor='task-name'>
            Task
          </label>
          <input
            value={taskNameInput}
            onChange={(e) => setTaskNameInput(e.target.value)}
            name='task-name'
            className='px-4 py-2 w-full outline-none'
            type='text'
            placeholder='Enter Task Name'
          />
        </div>
        <div className='mb-4'>
          <label className='text-white' htmlFor='task-name'>
            Description
          </label>
          <input
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
            name='task-name'
            className='px-4 py-2 w-full outline-none'
            type='text'
            placeholder='Enter Task Name'
          />
        </div>

        <div className='mb-4'>
          <label className='text-white' htmlFor='task-name'>
            Organization
          </label>
          <select
            id='selectInput'
            value={orgOption}
            className='px-4 py-2 w-full outline-none'
            onChange={(e) => setOrgOption(e.target.value)}
          >
            {ORG_OPTIONS.map((option: string, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-4'>
          <label className='text-white' htmlFor='task-name'>
            Assign to
          </label>
          <select
            id='selectInput'
            value={assignedToOption}
            className='px-4 py-2 w-full outline-none'
            onChange={(e) => setAssignedToOption(e.target.value)}
          >
            {ASSIGNED_TO_OPTIONS.map((option: string, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-4'>
          <label className='text-white' htmlFor='task-name'>
            Priority
          </label>
          <select
            id='selectInput'
            value={priorityOption}
            className='px-4 py-2 w-full outline-none'
            onChange={(e) => setPriorityOption(e.target.value)}
          >
            {PRIORITY_OPTIONS.map((option: string, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <p className='text-red-500'>{errorMessage}</p>
        <button
          type='submit'
          className='bg-red-600 text-white px-7 py-2 h-auto text-sm mt-4'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewForm
