import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintRules from "@/scripts/eslint-rules.js";

export default withNuxt(eslintPluginPrettierRecommended).overrideRules(eslintRules);
