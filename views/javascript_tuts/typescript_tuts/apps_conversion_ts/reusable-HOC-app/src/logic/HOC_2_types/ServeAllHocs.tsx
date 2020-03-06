import React from 'react'
import HOC_wrapper_list from './HOC_wrapper';
import HOC_wrapper_prop_injectors from './HOC_wrapper_prop_injectors';
import HOC_wrapper_prop_withExpander from './HOC_wrapper_prop_injectors2';
import Explanation_HOC_wrapper_no_generic from './Explanation_HOC_wrapper_no_generic';


//-----------------------------//
//diffrent data structure passed to componets sent to HOC
type Data = {name:string;work:string}[]
const data:Data = [
  {name:'Greg',work:'Software Guy'},
  {name:'Andrea',work:'Coffe machine Engineer'},
]
type Data2 = {nickname:string;work:string,age:number}[]
const data2:Data2 = [
  {nickname:'Greg',work:'Software Guy',age:34},
  {nickname:'Andrea',work:'Coffe machine Engineer', age:32},
]
//-----------------------------//

//-----------------------------//
//this props interface will be used also in HOC wrapper
export interface IListprops{
  list:Data
}
const SimpleList:React.FC<IListprops> = ({list}):JSX.Element => (
<div>
  {list.map(({name,work})=>(`My name is ${name}, and I do ${work}`))}
</div>)
//-----------------------------//


//just to prove that same generic HOC will work with diffrent component 
//-----------------------------//
export interface IListprops2 {
  data:Data2
}
const SimpleList2:React.FC<IListprops2> = ({data}):JSX.Element => (
  <div>
    {data.map(({nickname,work,age})=>(` My name is ${nickname}, and I do ${work} and I am ${age}`))}
  </div>)
//-----------------------------//

interface PureComp {
  isExpanded:boolean
  title: string;
  className?: string;
  toggleExpanded(): void;

}
const ExpanderComponent:React.FC<PureComp> = (props):JSX.Element => {
  const { isExpanded, toggleExpanded, title, children } = props;

  console.log('props',props)
  return (
    <div>
        <>
          <button onClick={toggleExpanded}>{title}</button>
          {isExpanded && children}
        </>
    </div>
  )
}
  


//-----------------------------//



//1 HOC wrapper used for 2 diffrent components
const WithLoader = HOC_wrapper_list(SimpleList)
const WithLoaderDifferentData = HOC_wrapper_list(SimpleList2)
const WithLoaderPropsInjected = HOC_wrapper_prop_injectors(SimpleList)
const ExplainedWithLoaderInterface_no_Generic = Explanation_HOC_wrapper_no_generic(SimpleList)
const EnhancedComponent = HOC_wrapper_prop_withExpander(ExpanderComponent);


export default ()=>(
  <div>
    <WithLoader loading={true} list={data} />
    {'injector'}
    <WithLoaderPropsInjected loading={true} list={data} />
    <WithLoaderDifferentData loading={true} data={data2} />
    <EnhancedComponent title="toogle" >
      {'I am a children'}
    </EnhancedComponent>;
    <EnhancedComponent title="toggle" >
      {'I am a children2'}
    </EnhancedComponent>;
    <ExplainedWithLoaderInterface_no_Generic loading={true} list={data} />
  </div>
);

