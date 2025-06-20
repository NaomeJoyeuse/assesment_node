import { v4 as uuidv4 } from 'uuid';

const users = {}; 

export function createUser(name, email) {
  const id = uuidv4();
  const newUser = { id, name, email };
  users[id] = newUser;
  return newUser;
}

export function getUserById(id) {
  return users[id] || null;
}
