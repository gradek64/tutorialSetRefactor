2) run eslint --init to create .eslint.json file;
3) then you need to install bunch of eslint-plugins that are are need for air-BnB highlighting below:
  
    npm i -D eslint-config-airbnb@16.1.0 eslint-plugin-import@2.7.0 eslint-plugin-react@7.4.0 eslint-plugin-jsx-a11y@6.0.1

those rules are covering jsx, react and can be found here:

https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

4) to enable it you need to have this line : "extends": "airbnb",
  Great feature with airbnb formating is toolip hightling with an error discription , and also you can customize your set of rules as needed below:

5) customise airbnb rules:
  like trailing coma for object change to warning:

  "comma-dangle": "warn",

  //or only highlight error for local variable no used but not as function arguments 
  "no-unused-vars":[
            "vars":"locals",
            "args":"none"
        ]