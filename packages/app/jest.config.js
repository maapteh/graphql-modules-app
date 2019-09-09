module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/(components)/.*(\\.|/)(test|spec))\\.(tsx?|ts?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ['.next'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    collectCoverage: true,
    coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    globals: {
        'ts-jest': {
            babelConfig: '.babelrc',
            tsConfig: 'jest.tsconfig.json',
        },
    },
};
