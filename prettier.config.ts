// prettier.config.ts, .prettierrc.ts, prettier.config.mts, or .prettierrc.mts

import { type Config } from "prettier";

const config: Config = {
  printWidth: 120,
  trailingComma: "none",
  plugins: ["prettier-plugin-tailwindcss"]
};

export default config;