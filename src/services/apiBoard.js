const BASE_API = 'http://localhost:8080';

export async function getTasks() {
  const res = await fetch(`${BASE_API}/tasks`);
  if (!res.ok) throw new Error('An error occured during fetch tasks data');
  const data = await res.json();
  return data;
}
export async function getArchivedTasks() {
  const res = await fetch(`${BASE_API}/archivedTasks`);
  if (!res.ok) throw new Error('An error occured during fetch tasks data');
  const data = await res.json();
  return data;
}
export async function getUsers() {
  const res = await fetch(`${BASE_API}/Users`);
  if (!res.ok) throw new Error('An error occured during fetch tasks data');
  const data = await res.json();
  return data;
}
export async function getTags() {
  const res = await fetch(`${BASE_API}/Tags`);
  if (!res.ok) throw new Error('An error occured during fetch tasks data');
  const data = await res.json();
  return data;
}
export async function createUser(user) {
  try {
    const res = await fetch(`${BASE_API}/Users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!res.ok) throw new Error('An error occured during save user data');
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function createTag(user) {
  try {
    const res = await fetch(`${BASE_API}/Tags`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!res.ok) throw new Error('An error occured during save user data');
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}