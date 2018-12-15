
module.exports = {
  testMatch: ['**/test/unit/**/*__Test.js'],
  modulePaths: ['<rootDir>'],
  collectCoverage: true,
  collectCoverageFrom: [ '**/src/(utils)/**/*.{js}', '!**/src/App/**/*.js' ]
};