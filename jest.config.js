module.exports = {
    bail: true,
    clearMocks: true,
    coverageProvider: 'v8',
    testMatch: [
        '**/__tests__/**/*.test.js?(x)'
    ],
    collectCoverage: true,
    coverageDirectory: '__tests__/coverage',
    collectCoverageFrom: ['src/**', '!src/database/migrations/**']
};
