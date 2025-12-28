const { VITE_API_URL, VITE_GOOGLE_MAPS_KEY, VITE_MAPS_ID } = import.meta.env;

if (!VITE_API_URL) {
  throw new Error('VITE_API_URL is missing');
}

export const env = {
  VITE_API_URL,
  VITE_GOOGLE_MAPS_KEY,
  VITE_MAPS_ID,
};
