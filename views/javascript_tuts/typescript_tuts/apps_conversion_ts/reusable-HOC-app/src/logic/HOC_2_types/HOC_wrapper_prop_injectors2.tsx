
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
 //those are excluded
 interface ExpanderProps {
  isExpanded: boolean;
  isExpanded1: boolean;
  toggleExpanded(): void;
}

interface IState {
  isExpanded:boolean;
}

//this is exact interface as the compoenent being passed and it has to be!
interface ExpanderComponentProps {
  title: string;
  className?: string;
}

//props to inject;
import { IListprops } from './ServeAllHocs'
function withExpander<TWrappedComponentProps extends ExpanderComponentProps>(
      WrappedComponent: React.ComponentType<ExpanderComponentProps> ) {

  //type WrappedComponentPropsExceptProvided = Exclude<keyof TWrappedComponentProps, keyof ExpanderProps>;
  // => "title" | "className"
  //type ForwardedProps = Pick<TWrappedComponentProps, WrappedComponentPropsExceptProvided>;

  // => { title: string; className?: string }
  /* const checkTitle:ForwardedProps = {
    title:'greg',
    isExpanded:false,
    toggleExpanded:()=>{},
  } */

  //console.log(checkTitle)
  
  return class WithExpander 
    extends React.Component<ExpanderComponentProps,IState> {

     constructor(props){
       super(props)
       this.state={
        isExpanded:false,
       }
     }

    render() {
      console.log('...this.state',this.state)
      return (
        <WrappedComponent
          {...this.props as any}
          {...this.state}
          toggleExpanded={this.toggleExpanded}
        />
      );
    }

    private toggleExpanded = () =>
      this.setState(state => ({ isExpanded: !state.isExpanded }));
  };
}

export default withExpander
