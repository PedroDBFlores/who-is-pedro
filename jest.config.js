const path = require("path")

module.exports = {
    preset: 'ts-jest',
    roots: [
        "<rootDir>/src",
        "<rootDir>/tests"
    ],
    testMatch: ["**/*.test.ts",],
    transform: {
        "^.+\\.svelte$": [
            "svelte-jester",
            {
                "preprocess": true
            }
        ],
        "^.+\\.ts$": "ts-jest"
    },
    moduleFileExtensions: [
        "js",
        "ts",
        "svelte"
    ],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ]
}