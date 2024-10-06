import type { NextApiRequest, NextApiResponse } from 'next'
import { addUser, findUserByEmail, User } from '@/lib/users'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    const existingUser = findUserByEmail(email)
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' })
    }

    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      password, // In a real app, you'd hash this password
    }

    addUser(newUser)

    res.status(201).json({ message: 'User created successfully', userId: newUser.id, name: newUser.name, email: newUser.email })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}