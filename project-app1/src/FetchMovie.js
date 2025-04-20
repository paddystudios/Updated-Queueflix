const API_BASE_URL = 'http://localhost:3000/api/movies';

export const fetchMovie = async () => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Fetch movies error:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  if (!query?.trim()) {
    return Promise.resolve([]);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/search?query=${encodeURIComponent(query.trim())}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Search failed with status ${response.status}`);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Search movies error:', error);
    throw error;
  }
};
