import { BE_URL } from '../../rootConstants';

export class CUDService {
  static POST(url, data) {
    return fetch(`${BE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .catch(error => {
        throw new Error(error);
      });
  }

  static PUT(url, data) {
    return fetch(`${BE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .catch(error => {
        throw new Error(error);
      });
  }

  static DELETE(url, data = '') {
    return fetch(`${BE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .catch(error => {
        throw new Error(error);
      });
  }
}
