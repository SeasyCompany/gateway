const config = require('./jest.config')

config.displayName = 'integration-tests'
config.testMatch = ['<rootDir>/test/**/*.spec.ts']

module.exports = config
