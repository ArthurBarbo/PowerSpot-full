import { env } from '../../env/index';
const API_URL = env.VITE_API_URL;
export async function getFavoriteCards(token) {
  try {
    const res = await fetch(`${API_URL}/users/favorites`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Erro ao buscar favoritos');

    return data.favorites;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function saveCard(cardId, token) {
  try {
    const res = await fetch(`${API_URL}/users/favorites`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cardId }),
    });
    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Erro ao salvar card');

    return data.favorites;
  } catch (err) {
    console.error('Erro em saveCard:', err);
    return [];
  }
}
