
	1)  Eslint is set of rules that could be set globally,locally or both
	so the local one will override the global set of rules. 

	  U need to install npm package:
	
		npm i eslint

	then in your home directory: /Users/gilgrz 
	U need create a file : .eslintrc 
	go to--> https://eslint.org/docs/user-guide/configuring --> to configure 	that file , again you can set .eslintrc locally with diffrent set of rul	es, and that is the beauty fo configuration per project!

  The best way to start with default configuration is to run eslint --init 

  2) Technically you can lint your code simply by running : eslint 'nameofthefile.js' but in real scenarion U want to set up with your editor

  3) Great feature is once U set up your set of rules, Sublime formater will read them and fix those it can as
  trailing commas, extra spacing etc ...so it will correct that for U accoring to the .eslint files rules, extremely handy if you share code with other developers
