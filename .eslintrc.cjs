module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
        // ESLint
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "sort-imports": "off",
        "comma-dangle": ["error", "always-multiline"],
        "semi": ["error", "always"],
        "no-unused-vars": "off",
        "no-trailing-spaces": ["error"],
        "no-unused-expressions": ["error"],
        "object-curly-newline": ["error", { "multiline": true, "consistent": true, "minProperties": 2 }],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": false }],
        "object-curly-spacing": ["error", "always"],
        "no-restricted-imports": ["error", {
          "patterns": ["../../"]
        }],
        "array-bracket-newline": ["error", {
          "multiline": true,
          "minItems": 2
        }],
        "array-element-newline": ["error", {
          "multiline": true,
          "minItems": 2
        }],
        "newline-before-return": ["error"],
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "no-multi-spaces": "error",
        "keyword-spacing": ["error", { "before": true }],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "semi-spacing": ["error", {"before": false, "after": true}],
        "space-before-function-paren": ["error", "always"],
    
        // Typescript
        "@typescript-eslint/no-unused-vars": ["error", {
            "argsIgnorePattern": "^_",
            "varsIgnorePattern": "^_"
        }],
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-var-requires": "off",
    
        // React
        "react/jsx-indent": ["error", 4],
        "react/jsx-max-props-per-line": ["error", { "maximum": { "single": 1, "multi": 1, "when": "always" } }],
        "react/jsx-newline": ["error", { "prevent": false }],
        "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
        "react/jsx-closing-tag-location": ["error"],
        "react/jsx-one-expression-per-line": ["error", { "allow": "single-child" }],
        "react/jsx-props-no-multi-spaces": ["error"],
        "react/jsx-pascal-case": ["error"],
        "react/jsx-sort-props": ["error", {
          "callbacksLast": true,
          "shorthandFirst": true,
          "multiline": "ignore",
          "ignoreCase": true,
          "noSortAlphabetically": false,
          "reservedFirst": true
        }],
        "react/jsx-tag-spacing": ["error", {
          "closingSlash": "never",
          "beforeSelfClosing": "always",
          "afterOpening": "never",
          "beforeClosing": "never"
        }],
        "react/jsx-no-useless-fragment": ["error"],
        "react/jsx-first-prop-new-line": ["error", "multiline"],
        "react/self-closing-comp": ["error", {
          "component": true,
          "html": true
        }],
        "react/jsx-wrap-multilines": ["error"],
        "react/jsx-curly-spacing": ["error", {
          "when": "never",
          "children": {
            "when": "never"
          }
        }],
        "react/react-in-jsx-scope": "off",
  },
}
