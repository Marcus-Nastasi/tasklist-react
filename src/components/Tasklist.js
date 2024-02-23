import React, { Component } from "react";
import { FaPlus } from 'react-icons/fa'

export default class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         novaTarefa: '',
         tasks: [
            'Jumento',
            'Lazarento'
         ]
      };

      this.writeTask = this.writeTask.bind(this);
   }

   render() {
      const { novaTarefa, tasks } = this.state;

      return(
         <section className="flex justify-center w-screen min-h-screen h-fit p-20 bg-slate-500">
            <div className="h-fit w-3/4 p-10 bg-slate-300 rounded-md shadow-md shadow-black">
               <section className="flex flex-col">
                  <h2 className="text-6xl p-5">tasklist</h2>

                  <form className="p-2 flex justify-center" action="#">
                     <section className="p-2 flex flex-col items-center w-1/2">

                        <label htmlFor="task" className="my-5 text-2xl">Adicionar tarefa</label>

                        <div className="flex flex-row justify-center">

                           <input onChange={this.writeTask} itemID="inp" 
                              className="p-2 rounded-sm focus:border-none focus:outline-8 focus:outline-green-400" 
                              type="text" 
                              name="task"
                              value={novaTarefa}
                              />

                           <button onClick={this.addTask} type="submit" className="uppercase bg-green-500 text-slate-200 p-3 rounded-md transition-all ease-in-out duration-500 hover:bg-green-600">
                              < FaPlus />
                           </button>
                        </div>

                     </section>
                  </form>

                  <ul itemID="sec-task" className="w-1/2 self-center py-10 list-disc">
                     { tasks.map((task, i) => <li key={i}>{task}</li>) }
                  </ul>
               </section>
            </div>
         </section>
      );
   };

   writeTask(e) {
      this.setState({
         novaTarefa: e.target.value
      });
   }

   addTask(e) {
      e.preventDefault();
      
   }
}

