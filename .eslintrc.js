module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "@sveltejs",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "svelte3",
    "@typescript-eslint"
  ],
  rules: {
    "prefer-const": "error",
    semi: [
      2,
      "never"
    ],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          // 'none' or 'semi' or 'comma'
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          // 'semi' or 'comma'
          requireLast: false
        }
      }
    ],
    "@typescript-eslint/ban-ts-comment": 0
  },
  overrides: [
    {
      files: [
        "*.svelte"
      ],
      processor: "svelte3/svelte3",
      settings: {
        "svelte3/typescript": require("typescript")
      }
    }
  ]
}
