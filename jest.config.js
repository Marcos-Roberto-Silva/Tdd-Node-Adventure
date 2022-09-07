module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
