import { env } from '../../env/index';
const API_URL = env.VITE_API_URL;

export async function registerUser({ name, email, password }) {
  try {
    const res = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Erro ao registrar');

    return data;
  } catch (err) {
    throw err;
  }
}

export async function loginUser({ email, password }) {
  try {
    const res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Erro ao fazer login');

    localStorage.setItem('token', data.token);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getUserData(token) {
  try {
    const res = await fetch(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Token inválido');

    return data;
  } catch (err) {
    throw err;
  }
}

export async function updateUserName(token, newName) {
  try {
    if (!newName || typeof newName !== 'string') {
      throw new Error('Nome inválido para envio');
    }

    const res = await fetch(`${API_URL}/users/edit-name`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: newName }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Erro ao atualizar o nome');
    }

    return data;
  } catch (err) {
    throw err;
  }
}
