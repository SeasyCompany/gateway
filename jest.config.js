const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {
  displayName: 'tests',
  rootDir: root,
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/test/**/*.test.ts', '<rootDir>/test/**/*.spec.ts'],
  setupFiles: ['dotenv/config'],
  clearMocks: true,
  passWithNoTests: true,
  silent: true,
  noStackTrace: true
}
