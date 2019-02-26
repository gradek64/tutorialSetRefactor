1) airbnb eslint has nice features for react setup 
  - it will highlight dependencies that not installed but already installed;

2) it wont automaticaly enables jsx for .js files only for .jsx files to change that you need to go first:

https://github.com/yannickcr/eslint-plugin-react , then find your error 

as jsx filname-extension 

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md

and setup:

"rules": {
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
}

that line has to be added to your .eslintrc file