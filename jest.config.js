module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(../test/.*|(\\.|/)test)\\.(j|t)sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {},
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/.jest/tsconfig.json',
    },
  },
}
