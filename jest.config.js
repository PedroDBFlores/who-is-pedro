const path = require("path")

module.exports = {
    preset: 'ts-jest',
    roots: [
        "<rootDir>/src"
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
    ]
}