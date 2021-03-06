module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['calculator.js'], // here you can configure which folders or files jest will consider coverage
    coverageDirectory: 'coverage',
	collectCoverage: true,
    testEnvironment: 'node',
    testMatch: ['<rootDir>/__tests__/**/*.js'],
    verbose: true
}