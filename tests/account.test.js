const axios = require('axios');

const BASE_URL = 'https://demoqa.com/Account/v1';

describe('POST /Account/v1/User - Create User', () => {
  // Positive test: user creation with valid username and strong password
  test('should create user with valid data', async () => {
    const response = await axios.post(`${BASE_URL}/User`, {
      userName: `testuser_${Date.now()}`,
      password: 'StrongPassword123!'
    });

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('userID');
    expect(response.data).toHaveProperty('username');
  });

  // Negative test: user creation with empty password (invalid input)
  test('should NOT create user with empty password', async () => {
    try {
      await axios.post(`${BASE_URL}/User`, {
        userName: `invaliduser_${Date.now()}`,
        password: ''
      });
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.message).toBe("UserName and Password required.");
    }
  });
});