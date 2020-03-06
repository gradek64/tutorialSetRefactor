//let author = {}; original
let author:any = {};
author.nickname = "Meziantou";
author.fullName = "Gérald Barré";

// Above create an erro cause typesript understand let author = {}; as empty object 

//fix 1: create object interface with properties and properties types:

interface Author { nickname: string; fullName: string }

var authorObject = {} as Author;
authorObject.nickname = "Meziantou";
authorObject.fullName = "Gérald Barré";

// make typescript ignore the type (this is one is a bit cheating) but good start to start converting 
//any library , method basically object that have complex functionality loke _ load_dash

let authorCheat:any = {};
authorCheat.nickname = "Meziantou";
authorCheat.fullName = "Gérald Barré";
