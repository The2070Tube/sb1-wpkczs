export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

// In-memory storage (for demonstration purposes only)
let users: User[] = [];

export const addUser = (user: User) => {
  users.push(user);
  console.log('User added:', user);
  console.log('All users:', users);
}

export const findUserByEmail = (email: string) => {
  const user = users.find(user => user.email === email);
  console.log('Finding user by email:', email);
  console.log('User found:', user);
  return user;
}

export const getAllUsers = () => {
  console.log('All users:', users);
  return users;
}