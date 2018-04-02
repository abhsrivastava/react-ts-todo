import * as React from "react";
import * as ReactDOM from "react-dom";
import { TaskForm } from './TaskForm';
import { TaskTable } from './TaskTable';
import { Task } from './Models';

export class App extends React.Component<IProps, IState> {
   constructor(props: IProps) {
      super(props);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.state = {
         currentTask: '',
         taskList: []
      };
   }

   getMaxId() : number {
      return this.state.taskList.length + 1;
   }

   handleChange(textValue: string) {
      this.setState({currentTask: textValue});
   }

   handleDelete(index: number) {
      var copy = this.state.taskList.slice();
      copy.splice(index, 1);
      console.log(copy);
      this.setState({taskList: copy});
   }

   handleAdd() {
      if (this.state.currentTask != "") {
         var task : Task = {taskid: this.getMaxId(), taskvalue: this.state.currentTask, done: false};
         this.setState({
            currentTask: '',
            taskList: [
               ...this.state.taskList,
               task
            ]
         });
      }
   }
   public render() {
      return (
         <div>
            <h1>React Typescript Todo List</h1>
            <TaskForm text={this.state.currentTask} handleAdd={this.handleAdd} handleChange={this.handleChange} />
            <TaskTable taskList={this.state.taskList} handleDelete={this.handleDelete} />
         </div>
      )
   }
}

interface IState {
   currentTask: string,
   taskList: Array<Task>
}

interface IProps {
   name: string
}