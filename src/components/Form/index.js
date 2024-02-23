import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Form({ writeTask, novaTarefa, addTask }) {
   return(
      <form className="p-2 flex justify-center" action="#">

         <section className="p-2 flex flex-col items-center w-1/2">

            <label htmlFor="task" className="my-5 text-2xl">Adicionar tarefa</label>

            <div className="flex flex-row justify-center">
               <input onChange={writeTask} itemID="inp" 
                  className="p-2 rounded-sm focus:border-none focus:outline-8 focus:outline-green-400" 
                  type="text" 
                  name="task"
                  value={novaTarefa}
                  />

               <button onClick={addTask} type="submit" className="uppercase bg-green-500 text-slate-200 p-3 rounded-md transition-all ease-in-out duration-500 hover:bg-green-600">
                  < FaPlus />
               </button>
            </div>

         </section>

      </form>
   );
};

