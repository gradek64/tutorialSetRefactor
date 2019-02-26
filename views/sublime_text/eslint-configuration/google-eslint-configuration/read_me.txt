1) run eslint --init to create .eslint.json file;
2) visit google for : google javascript style guide

    https://google.github.io/styleguide/jsguide.html

3) npm install --save-dev eslint eslint-config-google

4) to enable it you need to have this line : "extends": "google",
  Great feature with airbnb formating is toolip hightling with an error discription , and also you can customize your set of rules as needed below:

5) customise gogole rules:
  like trailing coma for object change to warning:

  "comma-dangle": "warn",

  //or only highlight error for local variable no used but not as function arguments 
  "no-unused-vars":[
            "vars":"locals",
            "args":"none"
        ]

  6) more info about configuration;
      https://github.com/google/eslint-config-google;