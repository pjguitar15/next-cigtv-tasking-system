import connectMongoDB from '@/libs/mongodb'
import Task from '@/models/task'
import { NextResponse } from 'next/server'

// 'POST' function to handle the HTTP POST request.
export const POST = async (request: any) => {
  const { taskName, description, organization, assignedTo, priority } =
    await request.json()

  await connectMongoDB()

  await Task.create({
    taskName,
    description,
    organization,
    assignedTo,
    priority,
  })

  return NextResponse.json({ message: 'Todo Created' }, { status: 201 })
}

export async function GET() {
  await connectMongoDB()

  const tasks = await Task.find()

  return NextResponse.json({ tasks })
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get('id')

  await connectMongoDB()

  await Task.findByIdAndDelete(id)

  return NextResponse.json({ message: 'Todo deleted' }, { status: 200 })
}
