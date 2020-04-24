module.exports = {
  transform: {
    "^.+\\.tsx?$": 'ts-jest',
  },
  testRegex: '.test.(js?|jsx?|tsx?)$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
