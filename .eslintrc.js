module.exports = {
    "ecmaFeatures": {
        "jsx": true
    },
    "plugins": [
        "react"
    ],
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "es6": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb-base",
    "rules":{
        "indent": ["error", 4],
        "no-tabs": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "class-methods-use-this": 0,
        "import/prefer-default-export": 0,
        "function-paren-newline": 0,
        "linebreak-style": 0,
    }
};
