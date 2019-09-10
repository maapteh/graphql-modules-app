module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/src/.*(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ['dist'],
    collectCoverage: false,
    globals: {
        "ts-jest": {
            "diagnostics": {
                "warnOnly": true
            }
        }
    }
};
