module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    "react",
    "@typescript-eslint", // added for typescript
    "import", // added for @path
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    it: "writable",
    process: "readonly",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      //added for @path
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
  
};
