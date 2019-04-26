import * as React from 'react';

export class App extends React.Component<{}, IState> {
  constructor(props: {}){
    super(props);
    this.state ={
      currentTask: '',
      tasks: [],
    }
  }

  public handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    const { currentTask, tasks } = this.state;
    console.log(currentTask);
    this.setState({currentTask: "", tasks:[...tasks, currentTask] });
  }

  public handleChange = (event:any):void => {
    event.preventDefault();
    console.log(event.target.value)
    this.setState({
      currentTask: event.target.value,
    })
  }

  public renderTasks = ():JSX.Element[] => {
    const { tasks } = this.state;
    return tasks.map((task:string, index:number) => {
      return(
        <div key={index}>{task}</div>
      )
    })
  }

  public render():JSX.Element {
    console.log(this.state);
    const { currentTask } = this.state;
    return(
      <div>
        <h1>typescript todo list</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={currentTask}
            placeholder="Add a task"
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
        {
          this.renderTasks()
        }
      </div>
    )
  }
}

interface IState {
  currentTask: string;
  tasks: Array<string>;
}