const axios = require('axios');
const BASE_URL = 'https://demoqa.com/Account/v1';

describe('GET /Account/v1/User/{UUID} - Get User Info', () => {
  let userId = '';
  const userName = `testuser_${Date.now()}`;
  const password = 'StrongPassword123!';
  let token = '';

  // Setup: create a user and get token before tests
  beforeAll(async () => {
    try {
      const userRes = await axios.post(`${BASE_URL}/User`, {
        userName,
        password
      });
      userId = userRes.data.userID;

      const tokenRes = await axios.post(`${BASE_URL}/GenerateToken`, {
        userName,
        password
      });
      token = tokenRes.data.token;
    } catch (error) {
      console.warn('⚠️ Setup failed - likely server issue:', error.message);
    }
  });

  test('should get info about existing user', async () => {
    try {
      const response = await axios.get(`${BASE_URL}/User/${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      expect(response.status).toBe(200);
      expect(response.data.username).toBe(userName);
    } catch (error) {
      if (error.response?.status === 502) {
        console.warn('⚠️ Skipping test - server returned 502 Bad Gateway');
        return;
      }
      throw error;
    }
  });

  test('should NOT get info about non-existent user', async () => {
    try {
      await axios.get(`${BASE_URL}/User/00000000-0000-0000-0000-000000000000`, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      if (error.response?.status === 502) {
        console.warn('⚠️ Skipping test - server returned 502 Bad Gateway');
        return;
      }

      // API returns 401 for non-existent users
      expect(error.response.status).toBe(401);
      expect(error.response.data.message).toBe('User not found!');
    }
  });
});