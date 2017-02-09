module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "extends": "airbnb",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "global-require": "warn",
    "import/no-dynamic-require": "warn",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "arrow-body-style": "off",
    "comma-dangle": "off"
  }
};
