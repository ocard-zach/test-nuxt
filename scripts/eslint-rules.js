export default {
  "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  "vue/multi-word-component-names": "off",
  "vue/max-len": "off",
  "vue/html-self-closing": "off",
  "vue/max-attributes-per-line": ["error", { singleline: 3, multiline: 1 }],
  "vue/valid-v-slot": ["error", { allowModifiers: true }],
  "vuejs-accessibility/click-events-have-key-events": "off",
  "vuejs-accessibility/form-control-has-label": "off",
  "vuejs-accessibility/alt-text": "off",
  "no-use-before-define": "off",
  "no-underscore-dangle": ["error", { allow: ["_data", "_value"] }],
  "array-bracket-newline": ["error", { multiline: true }],
  "arrow-body-style": [
    "error",
    "as-needed",
    { requireReturnForObjectLiteral: true }
  ],
  "tailwindcss/no-custom-classname": "off",
  "@typescript-eslint/ban-types": "off",
  "@typescript-eslint/no-empty-object-type": "off",
  "@typescript-eslint/no-explicit-any": "off"
};
