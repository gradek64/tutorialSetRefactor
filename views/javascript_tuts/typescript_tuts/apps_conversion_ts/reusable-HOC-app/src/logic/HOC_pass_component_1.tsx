import React from 'react';
// This function takes a component...
const wrapperComponentMethod = <Props extends object>(
  WrappedComponent:React.ComponentType<Props>,
  data:{}[],
  trasformDataMethod:(data:any,name?:string)=>{}[]
  ) => {
  // ...and returns another component...
let transformedData:{}[]= [];
//HOC always needs to return component either functinal (props)=>JSX or class 
//and those could be wrapped in each other the first one in the stock will receive props 
//from initiation once the HOC is called 
//props send from <HOC_Comments dataSelectors={{text:''}} type={'comment'}/>
type Iprops<PropsGen extends object> = {
  dataSelectors:PropsGen,
  type:string,
  // All other props
}  
type IListprops = {
  list:[],
}


  type FullProps<T extends object> = Iprops<T> & IListprops;
  const closestComponentReceivingProps = <D extends object>(props:FullProps<D> & { children?: React.ReactNode }) => {
    const {type } = props
    switch (type) {
      case 'article':
        transformedData = trasformDataMethod(data,'Luke')
        break;
      case 'comment':
      case 'commentAvatar':
        transformedData = trasformDataMethod(data)
        break;
      default:
        break;
    }
    //WrappedComponent doenst have specified props cause we dont know all the time
    //what compoenent we are going to send therefore all we know the props are object <P extends Object>
    //return <WrappedComponent list={transformedData} {...props as FullProps<D>}/>  
  }
  return closestComponentReceivingProps
}
export default wrapperComponentMethod
