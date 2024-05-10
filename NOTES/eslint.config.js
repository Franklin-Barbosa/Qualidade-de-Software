/*
import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];
*/

module.exports = {
  // configuração se aplica a todo o projeto.
  root: true,
  // ambiente (navegador e ES2020).
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  // exclui diretórios ou arquivos da verificação de lint.
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  // versão ECMAScript e o tipo de origem.
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  // configurações adicionais relacionadas ao React.
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "security"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/prop-types": "off", // desativa a necessidade de declarar os tipos de prop em componentes React.
    "no-warning-comments": "off", // desativa avisos para comentários contendo palavras-chave específicas.
    "security/detect-non-literal-regexp": "warn", //avisa sobre expressões regulares não literais.
    "security/detect-buffer-noassert": "warn", // avisa sobre o uso de Buffer sem verificações.
  },
};
