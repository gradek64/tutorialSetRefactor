
import React from 'react';
const LoadingMessage = () => (<div>{'is loading...'}</div>)

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
 interface WithLoadingProps {
  loading: boolean;
}
//***exp below***<P extends object> props extend object structure means <P> is object
const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
//or (Component: React.ComponentType<P>):React.ComponentType<P> redundant react does it 
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ?  <LoadingMessage /> : <Component {...props as P} />;
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