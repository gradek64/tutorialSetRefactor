
import React from 'react';

const LoadingMessage = () => (<div>{'is loading2...'}</div>)

/*
  * our withLoading HOC wrapper will receive all props as
  * <P extends object> P generic is object 
  the extra HOC wrapper prop is this one 
  * {loading: boolean};
  * and for passed component we only need this one:
  * list:{}[]
  * somehow we need to seperate them since we only need to pass list
  * spread rest operator does the job of seperating them
  * const { loading, ...props } = this.props;
  * and only send the once required by Component being passed
  * <Component {...props as P} />
  * 
  */
 //extra prop interface
 interface WithLoadingProps2 {
  loading2: boolean;
  loading: boolean;
}

interface WithLoadingProps {
  loading: boolean;
}


/*****
 *    this example can not have injected props the reason is 
 * 
 *    1: U need to define type of props taken by enhancer function (
      Component: React.ComponentType<WrappedComponentProps>) has to be unknown extends {}

      2:it is wrapped with class component that have to have this type 
      <WrappedComponentProps & WithLoadingProps> which means {} plus extended WithLoadingProps

      3: finally U need to return pass component and send its props 
      { ...rest as any } any is already a bug
 * 
 * 
 * ******/


//props to inject;
import { IListprops } from './ServeAllHocs'
//***exp below***<P extends object> props extend object structure means <P> is object
const withLoading = <WrappedComponentProps extends {}>(
  Component: React.ComponentType<WrappedComponentProps>) => {
//or (Component: React.ComponentType<P>):React.ComponentType<P> redundant react does it 
type WrappedComponentPropsExceptProvided = Exclude<keyof WrappedComponentProps, keyof WithLoadingProps>;
//type ForwardedProps = Pick<WrappedComponentProps, WrappedComponentPropsExceptProvided>;



  return  class WithLoading extends React.Component<WrappedComponentProps & WithLoadingProps> {
    render() {
       const { loading, ...rest } = this.props;
       


       /*type L = Pick<P, Exclude<keyof P, keyof WithLoadingProps>> */
      //return loading ?  <LoadingMessage /> : <Component {...props as any} />; 
      return <Component {...rest as any} />;
    }
    }
  };
export default withLoading

//***exp below***
/*
  *technically is ok to import or create interface and extend our props with it 
    **<P extends ComponentListProps & WithLoadingProps>
  *but this way we strict tight props only to those interfaces 
    **<P extends object> 
  *allow us to use any interface and do type check component before they passed here
*/