import mongoose, { Schema, Document } from 'mongoose'

interface ITask extends Document {
  taskName: string
  description: string
  organization: string
  assignedTo: string
  priority: string
  createdAt: Date
  updatedAt: Date
}

const taskSchema: Schema<ITask> = new Schema<ITask>(
  {
    // Define the 'title' field as a string and make it required.
    taskName: { type: String, required: true },
    // Define the 'description' field as a string and make it required.
    description: { type: String, required: true },
    organization: { type: String, required: true },
    assignedTo: { type: String, required: true },
    priority: { type: String, required: true },
  },
  {
    // Enable timestamps to automatically add 'createdAt' and 'updatedAt' fields.
    timestamps: true,
  }
)

const Task =
  (mongoose.models.Task as mongoose.Model<ITask>) ||
  mongoose.model<ITask>('Task', taskSchema)

export default Task
