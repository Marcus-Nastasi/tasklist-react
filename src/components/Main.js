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
         <>
            <h1 className="">Meu componente de classe</h1>

            <div className="h-fit p-10 bg-slate-300">
               <section className="p-36">

               </section>
            </div>
         </>
      );
   };
}

