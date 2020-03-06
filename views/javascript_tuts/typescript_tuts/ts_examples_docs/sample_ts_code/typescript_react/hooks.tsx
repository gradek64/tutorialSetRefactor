import React from 'react'

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