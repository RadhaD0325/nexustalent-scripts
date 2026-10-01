const js = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = [
    {
        ignores: ["dist/**", "node_modules/**"]
    },

    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
        files: ["src/**/*.ts"],
        rules: {
            "@typescript-eslint/no-explicit-any": "error"
        }
    },

    {
        files: ["eslint.config.js", "webpack.config.js", "jest.config.js"],
        rules: {
            "@typescript-eslint/no-require-imports": "off",
            "no-undef": "off"
        }
    }
];