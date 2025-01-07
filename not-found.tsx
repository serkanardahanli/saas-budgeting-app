import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">404 - Page Not Found</h1>
        <p className="text-xl mb-8 text-gray-600">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}
