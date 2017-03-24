module.exports = {
  "root": true,
  "extends": "defaults/configurations/google",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },

  // required to lint *.vue files
  "plugins": [
    "html"
  ],

  "ignore": ["source/js/lib/*"],
  "globals": {
    "window": true,
    "document": true,
    "module": true,
    "Promise": true,
    "Event": true,
    "CustomEvent": true,
    "XMLHttpRequest": true,
    "console": true,
    "__dirname": true
  },

  // add your custom rules here
  "rules": {
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "no-multiple-empty-lines": ["error", {"max": 3}],
    "object-curly-spacing": ["error", "always", {
      "objectsInObjects": false,
      "arraysInObjects": false
    }],
    // allow paren-less arrow functions
    "arrow-parens": 0,
    "max-len": ["error", 120],
    "dot-location": 0,

    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
}
