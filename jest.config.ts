export default {
  moduleNameMapper: {
    // Skips all of these extensions:
    '\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2)$': '<rootDir>/jest-empty-module.js',
    '^#components(.*)$': '<rootDir>/src/components/$1'
  },
  // You may remove that option and place that comment in specific test files:
  // // @jest-environment jsdomd
  testEnvironment: 'jsdom',
  testMatch: ['**/*.unit.tests.[jt]s?(x)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
};
