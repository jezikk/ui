/** @type {import("prettier").Options} */

module.exports = {
  importOrder: [
    "",
    "<BUILTIN_MODULES>", // Node.js built-in modules
    "",
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
    "",
    "^[.]", // relative imports
    "",
    "^(?!.*[.]css$)[./].*$",
    ".css$",
  ],
  plugins: [
    "prettier-plugin-tailwindcss",
    //"@ianvs/prettier-plugin-sort-imports",
  ],
};
