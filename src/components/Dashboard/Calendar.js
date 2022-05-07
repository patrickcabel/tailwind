        import React from 'react';
        import Moment from 'react-moment';
        import moment from 'moment';



        export default function Calendar() {

            return(

        <div class=" bg-[red] justify-items-center rounded-full h-[350px] border-2  w-[350px] shadow-black shadow-xl static"> 

        <div class=" flex flex-col items-center text-black font-extrabold">
                    <span class="text-color text-[#fff] text-[3em] text-extrabold leading-[1em] mt-[20px]">
                        <Moment format="MMMM" trim durationFromNowinterval={1000} ></Moment>
                        </span>
                    <span class="text-color text-[#fff] text-[3em] text-extrabold leading-[1.2em] mt-[20px] ">
                        <Moment format="Do" trim durationFromNowinterval={1000} ></Moment>
                            </span>
                    <span class="text-color text-[#fff] text-[3em] text-extrabold leading-[2em] " >
                        <Moment  format="hh:mm:ss" trim durationFromNowinterval={1000} ></Moment>
                        </span>
                    <span class="text-color text-[#fff] text-[3em] text-extrabold leading-[1.2em] mb-[20px]"> 
                    <Moment format="YYYY" trim durationFromNowinterval={1000} ></Moment> 
                    </span>
                </div>

                </div>
            
            )

        }