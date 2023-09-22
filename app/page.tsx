import NewTicketsSection from '@/components/NewTicketsSection'
import TaskList from '@/components/TaskList'

export default function Home() {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto'>
        <NewTicketsSection />
        <TaskList />
      </div>
    </main>
  )
}
