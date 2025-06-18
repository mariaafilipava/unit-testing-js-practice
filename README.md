## API Testing for DemoQA

This project contains automated API tests for endpoints provided by DemoQA Swagger API (https://demoqa.com/swagger), as well as mock tests using `nock`.

## What’s included

- Task 1: API tests for real endpoints:
  - POST /Account/v1/User – create user
  - POST /Account/v1/GenerateToken – generate token
  - GET /Account/v1/User/{UUID} – get user info
  - DELETE /Account/v1/User/{UUID} – delete user

- Task 2: Mocked tests for endpoint:
  - GET /users/:id with responses: 200, 204, 403, 404, 502

## Getting started

1. Clone the repository:
   git clone https://github.com/mariaafilipava/unit-testing-js-practice.git
   cd unit-testing-js-practice
   git checkout practice-4

2. Install dependencies:
   npm install

3. Run all tests:
   npm test

Tech Stack

- Axios – HTTP client
- Jest – test framework
- Nock – HTTP mocking