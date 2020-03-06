import React from "react";

//type for this component is React Functional Component hence React.FC
//this component takes props React.FC<{prop object}>
const functionalComp:React.FC<{name:string,age:number}> = () => {
  return(
    <p>{'I m funcinal usefull component'}</p>
  )
}

//U can also define prop obect as interface since it is an object;
interface FCInterfaceProps{
  name:string;
  age:number;
}
const functionalCompWithInterface:React.FC<FCInterfaceProps> = () => {
  return(
    <p>{'I m funcinal usefull component'}</p>
  )
}

//optional props;
//U can also define prop obect as interface since it is an object;
interface FCInterfacePropsOptional{
  occupation:string;
  interests?:string;
}
const functionalCompWithInterfaceOptonal:React.FC<FCInterfacePropsOptional> = () => {
  return(
    {}
  )
}