const axios = require('axios');

const BASE_URL = 'https://demoqa.com/Account/v1';

describe('POST /Account/v1/GenerateToken - Token Generation', () => {
  const userName = `testuser_${Date.now()}`;
  const password = 'StrongPassword123!';

  // Precondition: Create a user before generating the token
  beforeAll(async () => {
    try {
      await axios.post(`${BASE_URL}/User`, { userName, password });
      await new Promise((resolve) => setTimeout(resolve, 1000)); // allow time for registration
    } catch (error) {
      console.warn('⚠️ Could not create user - server issue:', error.message);
    }
  });

  test('should generate token for valid user credentials', async () => {
    try {
      const response = await axios.post(`${BASE_URL}/GenerateToken`, {
        userName,
        password
      });

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('token');
      expect(response.data.status).toBe('Success');
      expect(response.data.result).toBe('User authorized successfully.');
    } catch (error) {
      if (error.response?.status === 502) {
        console.warn('⚠️ Skipping test - server returned 502 Bad Gateway');
        return;
      }
      throw error;
    }
  });

  test('should NOT generate token with invalid password', async () => {
    try {
      const response = await axios.post(`${BASE_URL}/GenerateToken`, {
        userName,
        password: 'WrongPassword123!'
      });

      // API returns 200 even when credentials are wrong — verify response body
      expect(response.status).toBe(200);
      expect(response.data.status).toBe('Failed');
      expect(response.data.result).toBe('User authorization failed.');
    } catch (error) {
      if (error.response?.status === 502) {
        console.warn('⚠️ Skipping test - server returned 502 Bad Gateway');
        return;
      }
      throw error;
    }
  });
});