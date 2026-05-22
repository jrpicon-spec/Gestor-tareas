const API_URL = 'http://localhost:3000/tasks';

export const api = {
  getTasks: async () => {
    const res = await fetch(API_URL);
    return res.json();
  },

  createTask: async (title: string, priority: string) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, priority }),
    });
    return res.json();
  },

  updateTask: async (id: number, data: { title?: string; priority?: string; completed?: boolean }) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  deleteTask: async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  },
};
