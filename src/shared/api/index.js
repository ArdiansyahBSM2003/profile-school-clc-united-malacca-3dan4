const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export async function fetchJson(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Permintaan gagal dengan status ${response.status}`);
  }

  return response.json();
}
