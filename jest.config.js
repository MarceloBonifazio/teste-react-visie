module.exports = {
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/build',
    '<rootDir>/tmp',
    '<rootDir>/cypress',
  ],
  coverageReporters: ['cobertura', 'text', 'clover', 'lcov', 'json', 'html'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(jpg|svg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)\\?*(.*)$':
      '<rootDir>/src/__mocks__/assets.js',
    '@/(.*)$': '<rootDir>/src/app/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!jest-mock-object|rc-slider)',
  ],
  verbose: true,
};
