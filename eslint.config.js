export default [
    {
      ignores: ["node_modules/**"],
    },
    {
      files: ["**/*.js", "**/*.mjs"],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
      env: {
        node: true,
        es2021: true,
        jest: true,
      },
      rules: {
        "no-redeclare": "error",
        "no-undef": "error",
        "no-unused-vars": "error",
      },
    },
  ];
  