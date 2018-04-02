import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Task } from './Models';
import "../styles/style.scss";

export class TaskTable extends React.Component<TableProps, any> {
   constructor(props: TableProps){
      super(props);
   }
   render() : JSX.Element {
      console.log('came inside render method');
      return (
         <div>
            {this.props.taskList.map((t: Task, index: number) => 
               <div key={t.taskid} className="tdl-task">
                  <span className={t.done ? "is-completed" : ""}>{t.taskvalue}</span>
                  <button onClick={(e) => this.props.handleDelete(index)}>Delete</button>
                  <button onClick={(e) => this.props.toggleDone(index)}> {!t.done ? "Done" : "Undo"} </button>
               </div>
            )}
         </div>
      );
   }
}

interface TableProps {
   taskList: Array<Task>,
   handleDelete: (index: number) => void,
   toggleDone: (index: number) => void
}