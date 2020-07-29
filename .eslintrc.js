module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
    "commonjs":true,
    "es6":true,
    "node":true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/essential"
  ],
  "rules":{
    "indent":[1,2],
  },
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ]
};
