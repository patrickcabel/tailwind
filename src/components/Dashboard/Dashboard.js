
import React from 'react';
import NavBar from "../NavBar/NavBar";


export default function Dashboard() {

  return (

    <div>  <NavBar />
      <div className="grid grid-flow-col grid-cols-4 gap-4 ">

        <section className="text-white hover:bg-blue-100">

          <article className="bg-black  border-2 rounded-md h-[400px] m-[10px]">
            <p>Projects</p>
          </article>

          <article className="bg-black border-2 rounded-md h-[400px] m-[10px]">
            <p>Finances</p>
          </article>

          <article class="bg-black border-2 rounded-md h-[400px] m-[10px]">
            <p>HR</p>
          </article>

          <article class="bg-black border-2 rounded-md h-[400px] m-[10px]">
            <p>Team</p>
          </article>

        </section>
      </div>
    </div>

  );

}