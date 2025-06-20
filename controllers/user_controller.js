import { createUser, getUserById } from '../service/user_service';

export function createUserController(req, res) {
  const { name, email } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Invalid or missing name' });
  }

  if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid or missing email' });
  }

  try {
    const newUser = createUser(name.trim(), email.trim());
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json({ error: 'Server error while creating user' });
  }
}

export function getUserByIdController(req, res) {
  const { id } = req.params;
  const user = getUserById(id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  return res.json(user);
}
