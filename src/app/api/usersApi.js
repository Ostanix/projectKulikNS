const usersApiUrl = 'https://jsonplaceholder.typicode.com/users';
const albumsApiUrl = 'https://jsonplaceholder.typicode.com/albums';
const photosApiUrl = 'https://jsonplaceholder.typicode.com/photos';

async function fetchUsers() {
  try {
    const response = await fetch(usersApiUrl);

    if (!response.ok) {
      throw new Error(`Ошибка при выполнении запроса : ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Ошибка при получении данных: ${error.message}`);
  }
}

async function fetchAlbumsId(userId) {
  try {
    const response = await fetch(albumsApiUrl);

    if (!response.ok) {
      throw new Error(`Ошибка при выполнении запроса : ${response.status}`);
    }

    const data = await response.json();

    const userAlbums = data.filter((album) => album.userId === parseInt(userId));

    const albumIds = userAlbums.map((album) => album.id);

    return albumIds;
  } catch (error) {
    throw new Error(`Ошибка при получении данных: ${error.message}`);
  }
}

async function fetchPhotos() {
  try {
    const response = await fetch(photosApiUrl);

    if (!response.ok) {
      throw new Error(`Ошибка при выполнении запроса: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Ошибка при получении данных: ${error.message}`);
  }
}

export default {
  fetchUsers,
  fetchAlbumsId,
  fetchPhotos,
};
