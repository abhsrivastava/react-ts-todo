import * as React from "react";
import * as ReactDOM from "react-dom";
import { TaskForm } from './TaskForm';
import { TaskTable } from './TaskTable';
import { Task } from './Models';

export class App extends React.Component<IProps, IState> {
   constructor(props: IProps) {
      super(props);
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

   toggleDone(index: number) {
      var copy = this.state.taskList;
      var item = this.state.taskList[index];
      copy[index] = {taskid: item.taskid, taskvalue: item.taskvalue, done: !item.done};
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
            <TaskForm text={this.state.currentTask} handleAdd={this.handleAdd.bind(this)} handleChange={this.handleChange.bind(this)} />
            <TaskTable taskList={this.state.taskList} handleDelete={this.handleDelete.bind(this)} toggleDone={this.toggleDone.bind(this)} />
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