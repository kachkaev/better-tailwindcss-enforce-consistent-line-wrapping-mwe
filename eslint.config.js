import { defineConfig } from "eslint/config";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

export default defineConfig(
  {
    ignores: ["node_modules/"],
  },

  {
    files: ["*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  {
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      "react/jsx-curly-brace-presence": "error",
    },
  },

  {
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      "better-tailwindcss/enforce-consistent-line-wrapping": "error",
    },
  },
);
