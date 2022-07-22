module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  plugins: [
    "react",
    "@typescript-eslint", // added for typescript
  ],
  parser: "@typescript-eslint/parser",
};
