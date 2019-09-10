module.exports = {
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/ts-jest"
    },
    testRegex: '(/src/.*(\\.|/)(test|spec))\\.(js?|ts?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ['dist'],
    collectCoverage: true,
    globals: {
      "ts-jest": {
        "diagnostics": false
      }
    },
    reporters: [
      "default"
    ]
};
