import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "../styles/style.scss";

export class TaskForm extends React.Component<any, any> {
   handleSubmit(e: React.FormEvent<HTMLFormElement>) : void {
      e.preventDefault();
      this.props.handleAdd();
   }
   
   render() : JSX.Element {
      return (
         <div className="form-style">
            <form onSubmit={(e) => this.handleSubmit(e)}>
               <input 
               type="text" 
               placeholder="Add a Task" 
               value={this.props.text} 
               className="tdl-input"
               onChange={(e) => this.props.handleChange(e.target.value)} />
               <button type="submit">Add Task</button>
            </form>   
         </div>
      )
   }
}
