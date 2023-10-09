/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const INLINE_ELEMENTS = ["a", "abbr", "audio", "b", "bdi", "bdo", "canvas", "cite", "code", "data", "del", "dfn", "em", "i", "iframe", "ins", "kbd", "label", "map", "mark", "noscript", "object", "output", "picture", "q", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "svg", "time", "u", "var", "video"];

module.exports = {
  "rules": {
    /*
    |-------------------
    | JavaScript config
    |-------------------
    */
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "camelcase": [0],
    "space-before-function-paren": [0],
    "no-undef": [0],
    "arrow-parens": ["error", "as-needed"],
    "no-return-assign": [0],
    "no-multi-spaces": [0],
    "curly": ["error", "multi-line"],
    "key-spacing": ["error", {
      "mode": "minimum"
    }],
    "no-multiple-empty-lines": ["error", {
      "max": 3
    }],
    "brace-style": ["error", "stroustrup"],
    "func-call-spacing": [0],
    "indent": ["error", 4, { 
      "SwitchCase": 1 
    }],

    /*
    |------------
    | Vue config
    |------------
    */
    "vue/order-in-components": ["warn", {
      "order": [
        "el",
        "name",
        "extends",
        "functional",
        "inheritAttrs",
        "layout",
        "head",
        "mixins",
        "components",
        "directives",
        "inject",
        ["props", "propsData"],
        "model",
        "provide",
        "validate",
        ["asyncData", "fetch"],
        "data",
        "computed",
        "methods",
        "watch",
        "LIFECYCLE_HOOKS",
        "middleware"
      ]
    }],
    "vue/attributes-order": ["error", {
      "order": [
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "LIST_RENDERING",
        "SLOT",
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "DEFINITION",
        [
          "GLOBAL",
          "UNIQUE"
        ],
        [
          "ATTR_DYNAMIC",
          "ATTR_SHORTHAND_BOOL",
          "ATTR_STATIC"
        ],
        "CONTENT",
        "EVENTS"
      ],
      "alphabetical": false
    }],
    "vue/max-attributes-per-line": ["warn", {
      "singleline": {
        "max": 6
      }
    }],
    "vue/first-attribute-linebreak": ["warn"],
    "vue/html-indent": ["warn"],
    "vue/singleline-html-element-content-newline": ["warn", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": ["template", ...INLINE_ELEMENTS]
    }],
    "vue/multi-word-component-names": [0],
    "vue/no-unused-properties": ["warn", {
      "groups": ["props", "data", "computed", "methods"],
      "deepData": false,
      "ignorePublicMembers": false
    }],

    /*
    |--------------------
    | Vue 3 config
    |--------------------
    */
    "vue/valid-v-for": ["error"],
    "vue/require-v-for-key": 0,

    /*
    |--------------------
    | TypeScript config
    |--------------------
    */
    "no-redeclare": "off",
  }
}
