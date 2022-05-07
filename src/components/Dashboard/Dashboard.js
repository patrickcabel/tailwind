
import React from 'react';
import NavBar from "../NavBar/NavBar";
import Calendar from './Calendar';


export default function Dashboard() {

  return (

    <div className="">  <NavBar />

      <Calendar />



      <h1 className="text-black text-4xl font-extrabold grid place-items-center align-items-center">Overview</h1>



      <div className="p-4 max-w-5xl grid place-items-center  md:gap-4 md:grid-cols-2  text-white ">


        <section >

          <div class="bg-black rounded-md h-[300px] border-2 md:sqaure w-60  hover:bg-gray-700 hover:shadow-lg shadow-indigo-500/40">
            <p>Projects 0verview</p>
          </div>

          <div class="bg-black rounded-md h-[300px] border-2 md:sqaure hover:bg-gray-700 ">
            <p>Finances Overview</p>
          </div>

          <div class="bg-black rounded-md h-[300px] border-2 md:sqaure hover:bg-gray-700 ">
            <p>HR overview</p>
          </div>

          <div class="bg-black rounded-md h-[300px] border-2 xs:sqaure hover:bg-gray-700 ">
            <p>Team overview</p>
          </div>

        </section>
      </div>
    </div>

  );

}