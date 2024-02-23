import React, { Component } from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import Form from "./Form";

export default class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         novaTarefa: '',
         tasks: [],
         index: -1
      };
   }

   render() {
      const { novaTarefa, tasks } = this.state;

      return(
         <section className="flex justify-center w-screen min-h-screen h-fit p-20 bg-slate-500">
            <div className="h-fit w-3/4 p-10 bg-slate-300 rounded-md shadow-md shadow-black">
               <section className="flex flex-col">
                  <h2 className="text-6xl p-5">tasklist</h2>

                  < Form 
                     writeTask={this.writeTask} novaTarefa={novaTarefa} addTask={this.addTask} />

                  <ul itemID="sec-task" className="w-1/2 self-center py-10 list-disc flex flex-col-reverse">
                     {
                     
                     tasks.map((task, i) => {
                        return(
                           <div className="flex flex-row justify-between p-5 transition-all ease-in-out duration-500 rounded-md hover:bg-slate-200">
                              <li className="ml-2" key={i}>{task}</li>

                              <div className="flex flex-row">

                                 <FaEdit onClick={e => this.handleEdit(e, i)} 
                                    className="mx-5 text-xl text-blue-800 hover:cursor-pointer hover:text-blue-900" />

                                 <FaWindowClose onClick={e => this.handleDelete(e, i)} 
                                    className="text-xl text-red-800 hover:cursor-pointer hover:text-red-900" />

                              </div>
                           </div>
                        );
                     })
                     
                     }
                  </ul>
               </section>
            </div>
         </section>
      );
   };

   componentDidMount() {
      const getTasks = JSON.parse(localStorage.getItem('tasks'));

      if(!getTasks) return;

      return this.setState({
         tasks: [...getTasks]
      });
   }

   componentDidUpdate(prevProps, prevState) {
      const { tasks } = this.state;

      if(tasks === prevState.tasks) return;

      localStorage.setItem('tasks', JSON.stringify(tasks));
      return;
   }

   writeTask = e => {
      return this.setState({
         novaTarefa: e.target.value
      });
   }

   addTask = e => {
      e.preventDefault();
      const { tasks, index } = this.state;
      var { novaTarefa } = this.state;

      const tarefaAdicionar = [ ...tasks ];

      if(index === -1) {
         this.setState({
            tasks: [...tarefaAdicionar, novaTarefa] 
         });

         return this.setState({
            novaTarefa: ''
         });
      }

      tarefaAdicionar[index] = novaTarefa;

      this.setState({
         tasks: [...tarefaAdicionar],
         index: -1
      });

      return this.setState({
         novaTarefa: ''
      });
   }

   handleEdit = (e, index) => {
      const { tasks } = this.state;

      return this.setState({
         index,
         novaTarefa: tasks[index]
      });
   }

   handleDelete = (e, index) => {
      const { tasks } = this.state;
      const copyTasks = [...tasks];

      copyTasks.splice(index, 1);

      return this.setState({
         tasks: [...copyTasks]
      })
   }
}

