import React from "react";
import PureList from "./DisplayList";
import { manipulateListFns } from "./manipulateListData";

/*
  *@There is 2 wasy of making your EnhancedCompoent (component that changes is baseComponent)
  *@1) wrap in a function that passes the baseCompoent into Enhanced compoent and return BaseCompoent
  *@1) use  baseCompoent directly as return value as below
*/

// const withTransformProps = helperFunc => BaseComponent => baseProps => {
const withTransformProps = helperFunc => props => {
  const transformedProps = helperFunc(props);
  return <PureList {...transformedProps} />;
};
// const ListWithTransformation = withTransformProps(manipulateListFns)(RenderDisplayList);
const ListWithTransformation = withTransformProps(manipulateListFns);

export default ListWithTransformation;
