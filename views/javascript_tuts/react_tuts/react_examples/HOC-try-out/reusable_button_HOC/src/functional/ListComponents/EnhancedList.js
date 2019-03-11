import React from "react";
import PureList from "./DisplayList";
import { manipulateListFns } from "./manipulateListData";

// const withTransformProps = helperFunc => BaseComponent => baseProps => {
const withTransformProps = helperFunc => props => {
  const transformedProps = helperFunc(props);
  return <PureList {...transformedProps} />;
};
// const ListWithTransformation = withTransformProps(manipulateListFns)(RenderDisplayList);
const ListWithTransformation = withTransformProps(manipulateListFns);

export default ListWithTransformation;
