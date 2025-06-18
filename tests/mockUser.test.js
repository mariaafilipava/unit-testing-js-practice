const nock = require('nock');
const axios = require('axios');

const BASE_URL = 'https://api.example.com';

describe('GET /users/:id - Mocked API tests', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  // Test: successful response with valid user data (200)
  test('should return valid user data for ID 1', async () => {
    nock(BASE_URL)
      .get('/users/1')
      .reply(200, {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        username: 'johndoe',
        phone: '+1-555-123-4567',
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipcode: '10001',
          country: 'USA'
        },
        company: {
          name: 'Doe Enterprises',
          industry: 'Technology',
          position: 'Software Engineer'
        },
        dob: '1990-05-15',
        profile_picture_url: 'https://example.com/images/johndoe.jpg',
        is_active: true,
        created_at: '2023-01-01T12:00:00Z',
        updated_at: '2023-10-01T12:00:00Z',
        preferences: {
          language: 'en',
          timezone: 'America/New_York',
          notifications_enabled: true
        }
      });

    const response = await axios.get(`${BASE_URL}/users/1`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
    expect(typeof response.data.name).toBe('string');
    expect(typeof response.data.email).toBe('string');
    expect(response.data.address).toHaveProperty('city');
    expect(response.data.company).toHaveProperty('position');
  });

  // Test: 204 No Content
  test('should handle 204 No Content', async () => {
    nock(BASE_URL)
      .get('/users/204')
      .reply(204);

    try {
      await axios.get(`${BASE_URL}/users/204`);
    } catch (error) {
      expect(error.response.status).toBe(204);
    }
  });

  // Test: 403 Forbidden
  test('should handle 403 Forbidden error', async () => {
    nock(BASE_URL)
      .get('/users/403')
      .reply(403, {
        error: 'Forbidden',
        details: 'You do not have access to this resource.'
      });

    try {
      await axios.get(`${BASE_URL}/users/403`);
    } catch (error) {
      expect(error.response.status).toBe(403);
      expect(error.response.data).toHaveProperty('error');
      expect(error.response.data).toHaveProperty('details');
    }
  });

  // Test: 404 Not Found
  test('should handle 404 Not Found error', async () => {
    nock(BASE_URL)
      .get('/users/404')
      .reply(404, {
        error: 'Not Found',
        details: 'User not found.'
      });

    try {
      await axios.get(`${BASE_URL}/users/404`);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data).toHaveProperty('error');
      expect(error.response.data).toHaveProperty('details');
    }
  });

  // Test: 502 Bad Gateway
  test('should handle 502 Bad Gateway error', async () => {
    nock(BASE_URL)
      .get('/users/502')
      .reply(502, {
        error: 'Bad Gateway',
        details: 'Server received an invalid response from upstream.'
      });

    try {
      await axios.get(`${BASE_URL}/users/502`);
    } catch (error) {
      expect(error.response.status).toBe(502);
      expect(error.response.data).toHaveProperty('error');
      expect(error.response.data).toHaveProperty('details');
    }
  });
});