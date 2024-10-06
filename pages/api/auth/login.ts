import type { NextApiRequest, NextApiResponse } from 'next'
import { findUserByEmail, getAllUsers } from '@/lib/users'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Log all users for debugging
    console.log('All users:', getAllUsers());

    const user = findUserByEmail(email)
    if (user && user.password === password) {
      // In a real app, you'd create a session or JWT here
      res.status(200).json({ message: 'Login successful', userId: user.id, name: user.name, email: user.email })
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}