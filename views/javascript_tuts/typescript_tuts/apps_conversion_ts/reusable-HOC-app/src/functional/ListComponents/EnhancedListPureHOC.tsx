import React from 'react';
//import PropTypes from 'prop-types';
import PureList from './DisplayList';
import { manipulateListFns } from './manipulateListData';

/*
  *@this Component is resposible of extending baseList component but
  it will transform/change props according to the actionType given from the parent Component
  as filering,sorting etc..
*/

/*
  *@There is 2 wasy of making your EnhancedCompoent (component that changes is baseComponent)
  *@1) wrap in a function that passes the baseCompoent into Enhanced compoent and return BaseCompoent
  *@1) use  baseCompoent directly as return value as below
*/

interface IHelperProps {
    list:Array<{name:string,side:string}>;
    letterSearch: string;
    sortBy: string;
    filter: string;
    filters: string;
    actionType: string;
  }

  interface ICallbackFn
  {
    //it takes props and returns object with property list containing array with objects [{}]
    (arg:IHelperProps):{list:{name:string,side:string}[]}
  };
  /*
        
        steps of logic breaken down:

    withTransformProps(helperFunc:ICallbacFn)

        accept helperFunc that is define in interface ICallbackFn, 

    then withTransformProps(helperFunc:ICallbacFn):return 
        (arg:IHelperProps)=>JSX.Element
      it returns another method so return type is a method in that level:

    the method being return is withTransformPropsComp(arg:IHelperProps):JSX.Element
    that is exaclty the same as method initiated it therefore the outcome is:

    before execution:                         after execution:
        (arg:IHelperProps)=>JSX.Element ===== (arg:IHelperProps):JSX.Element

  */
const withTransformProps = (helperFunc:ICallbackFn):(arg:IHelperProps)=>JSX.Element  => {

  
  const withTransformPropsComp = (arg:IHelperProps):JSX.Element => {
    /** ** props is a object defined in propTypes
    * */
    console.log('props of ListWithTransformation:', arg);

    const transformedProps:{list:{name:string,side:string}[]} = helperFunc(arg);
    return <PureList {...transformedProps} />;
  };
  return withTransformPropsComp;
};
// const ListWithTransformation = withTransformProps(manipulateListFns)(RenderDisplayList);
const ListWithTransformation = withTransformProps(manipulateListFns);

export default ListWithTransformation;
