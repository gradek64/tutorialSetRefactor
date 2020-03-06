
import React from 'react';
const LoadingMessage = () => (<div>{'is loading...'}</div>)

  
/*  
    interface ComponentListProps {
    list: {}[];
  } 
  *instead of repeat yourself lets make interface imported;
  */
  import {IListprops} from './ServeAllHocs' 


  /*
     IMPORTANT:
     this file refers to HOC_wrapper_interface_generic and is meant to give 
     explanation of datatype used for HOC either is possible to constructed the
     way is presenet her it is NOT A GOOD PRACTICE
     
     WE SHOULD ALAWAYS USE Generics <P extends object> to abstract HOC for any component
     with any props 
     the fact we import {IListprops} make it reusable only for List component for example
  
  */

 
/**************Explanation*********/
/*
  *function takes component with props structure in imported interface IListprops
    *(Component: React.ComponentType<IListprops>)
  *no generic needed 
  *(optional) we can defined what component is returned from function (not neccesary react does for us and not clean)
    *:React.ComponentType<WithLoadingProps & IListprops>
  *our function is  returning Class with combined props one for {list} one extra {loading}
      *class WithLoading extends React.Component<P & WithLoadingProps>
  *our final component return is wrapped compoenent that only need it own props
    *<Component {...props as IListprops}
  
  */
interface WithLoadingProps {
  loading: boolean;
}

const withLoading = 
  (Component: React.ComponentType<IListprops>)
  :React.ComponentType<WithLoadingProps & IListprops> =>
  //or (Component: React.ComponentType<IListprops>) typescript does the return type automatically
  class WithLoading extends React.Component<WithLoadingProps & IListprops> {
    render() {
      const { loading, ...props } = this.props;
      return loading ?  <LoadingMessage /> : <Component {...props as IListprops} />;
    }
  };
export default withLoading
