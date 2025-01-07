const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function testConnection() {
  try {
    console.log('Testing connection to Supabase...')
    const result = await prisma.$queryRaw`SELECT current_timestamp as time`
    console.log('Connection successful! Server time:', result)
  } catch (error) {
    console.error('Connection failed:', error.message)
    console.error('Full error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()

