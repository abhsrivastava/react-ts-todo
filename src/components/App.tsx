import * as React from "react";
import * as ReactDOM from "react-dom";

export class App extends React.Component<IProps, IState> {
   public render() {
      return (
         <div>{this.props.name}</div>
      )
   }
}

interface IState {

}

interface IProps {
   name: string
}