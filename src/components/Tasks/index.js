import React from "react";
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
   return(
      <ul itemID="sec-task" className="w-1/2 self-center py-10 list-disc flex flex-col-reverse">
         {
         
         tasks.map((task, i) => {
            return(
               <div className="flex flex-row justify-between p-5 transition-all ease-in-out duration-500 rounded-md hover:bg-slate-200">
                  <li className="ml-2" key={i}>
                     {task}
                  </li>

                  <div className="flex flex-row">
                     <FaEdit onClick={e => handleEdit(e, i)} className="mx-5 text-xl text-blue-800 hover:cursor-pointer hover:text-blue-900" />

                     <FaWindowClose onClick={e => handleDelete(e, i)} className="text-xl text-red-800 hover:cursor-pointer hover:text-red-900" />
                  </div>
               </div>
            );
         })
         
         }
      </ul>
   );
};

