//   1. anonimous non-return function
/* function(x,y){
  console.log(x,y)
} */
//es5
var ss = function (x, y) {
    console.log(x, y);
};
//es6
var ssES6 = function (x, y) {
    console.log(x, y);
};
//ts
/*
  1.const ss_ts: === var ss_ts = function
  2. this part is stricly t_s it acts as type of function and parameters it takes
  it is similar to object declaration as:
       obj:{param1:string, param2:string} and return: => number,string etc...
                                          no return => void (has to be there)
        parameters dont have to match names with actual function parameters,
        as long as the numbers of parameters are the same is valid
  3. function(x:string,y:string) {
  console.log(x,y) this is actual function declaration with parameters and body
*/
var ss_ts = function (x, y) {
    console.log(x, y);
};
//ts format 
var ss_ts_es6 = function (x, y) {
    console.log(x, y);
};
//ts format contextual types are skipped in actual function 
var ss_ts_es6_cont = function (x, y) {
    console.log(x, y);
};
//   1. named function add that takes 2 parameters of types: Number, Number 
function add(x, y) {
    return x + y;
}
var addConst = function (x, y) {
    return x + y;
};
//ts type 
var addConst_ts = function (x, y) {
    return x + y;
};
//ts type with es6
var addConst_ts_es6 = function (x, y) {
    return x + y;
};
//ts contextualtype with es6 with only one parameter contextual
var addConst_ts_es6_cont = function (x, y) {
    return x + y;
};
/********---------------------*********/
//   2. ():number is indication of return type and can be skipped due to return statement in function body 
function addNonSpecificReturn(x, y) {
    return x + y;
}
var addNonSpecificReturnConst = function (x, y) { return x + y; };
//ts format always require return type even if doesnt so it takes => void
var addNonSpecificReturnConst_ts = function (x, y) { return x + y; };
//ts format always contextual types are skiped in actual functon and kept in declarion
var addNonSpecificReturnConst_ts_cont = function (x, y) { return x + y; };
/********---------------------*********/
//  3. optional parameter
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
//es6 format 
var buildNameConst = function (firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
//typescript format;
var buildName_ts = function name(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
//t_s contextual typing actual parameters types are skiped since defined in function declaration
var buildName_ts_cont = function name(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
/********---------------------*********/
var result1 = buildName("Bob"); // works correctly now
var result3 = buildNameConst("Bob", "Adams"); // ah, just right
//   4. default parameter lastName = "Smith
function buildNameDefault(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
//es6 format
var buildNameDefaultConst = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
};
//ts format type declaration dont take defaults cause they only define types 
var buildNameDefaultConst_ts = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
};
//ts contextual typing actual parameters types are skiped since defined in function declaration
var buildNameDefaultConst_ts_cont = function (firstName, lastName) { return firstName + " " + lastName; };
var res = buildNameDefault("Bob"); // works correctly now, returns "Bob Smith"
var res2 = buildNameDefault("Bob", undefined); // still works, also returns "Bob Smith"
//let res3 = buildNameDefault("Bob", "Adams", "Sr.");  // error, too many parameters
var res4 = buildNameDefault("Bob", "Adams"); // ah, just right
//   5. unlimited parameter as rest operator ...parameter
var rest_operator_ts = function (firstName) {
    var restofName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restofName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restofName.join(" ");
};
//ts contextual
var rest_operator_ts_cont = function (firstName) {
    var restofName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restofName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restofName.join(" ");
};
rest_operator_ts_cont('Greg', 'is', 'cool', 'and', 'even');
/********---------------------*********/
//# sourceMappingURL=functions.js.map