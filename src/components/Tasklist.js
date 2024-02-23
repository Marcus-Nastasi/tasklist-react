import React, { Component } from "react";

export default class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         novaTarefa: ''
      };
   }

   render() {
      return(
         <section className="flex justify-center w-screen p-20 bg-slate-500">
            <div className="h-fit w-3/4 p-10 bg-slate-300 rounded-md shadow-md shadow-black">
               <section className="">

                  <h2 className="text-6xl p-5">tasklist</h2>

                  <form className="p-2 flex justify-center" action="#">

                     <section className="bg-slate-300 p-2 flex flex-col w-1/2">
                        <label for="task" className="my-5 text-xl">Adicionar tarefa</label>
                        <input className="p-2 rounded-sm focus:border-none focus:outline-8 focus:outline-green-400" type="text" name="task" id="task" />
                        <button type="submit" className="uppercase bg-green-500 text-slate-200 font-semibold my-10 p-1 w-1/2 self-center rounded-md transition-all ease-in-out duration-500 hover:bg-green-600">
                           adicionar
                        </button>
                     </section>

                  </form>
               </section>
            </div>
         </section>
      );
   };
}

