/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-clean-order",
    "stylelint-config-tailwindcss",
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "variant",
          "responsive",
          "screen",
          "theme",
          "plugin",
          "custom-variant",
        ],
      },
    ],
    "property-no-unknown": [true, { ignoreProperties: ["-radius"] }],
    "keyframes-name-pattern": null,
    "custom-property-pattern": null,
    "selector-class-pattern": null,
  },
};
