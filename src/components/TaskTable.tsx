import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Task } from './Models';

export class TaskTable extends React.Component<TableProps, any> {
   constructor(props: TableProps){
      super(props);
   }
   render() : JSX.Element {
      console.log('came inside render method');
      return (
         <div>
            {this.props.taskList.map((t: Task, index: number) => 
               <div key={t.taskid}>
                  <span>{t.taskvalue}</span>
                  <button onClick={(e) => this.props.handleDelete(index)}>Delete</button>
               </div>
            )}
         </div>
      );
   }
}

interface TableProps {
   taskList: Array<Task>,
   handleDelete: (index: number) => void
}