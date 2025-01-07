import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to FlowQi</h1>
        <p className="text-xl mb-8 text-gray-600">Your intelligent SaaS budgeting solution</p>
        <div className="space-x-4">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/register">
            <Button variant="outline">Register</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
