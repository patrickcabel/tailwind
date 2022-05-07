import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';



export default function Calendar() {
    const [dt, setDt] = React.useState(new Date().toLocaleString());

    React.useEffect(() => {
        let secTimer = setInterval(() => {
            setDt(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(secTimer);
    }, []);
    return (
        <div class="bg-[red] justify-items-center rounded-full h-[350px] border-2  w-[350px] shadow-black shadow-xl static">
            <span class="text-color text-[#fff] text-[3em] text-extrabold leading-[3em] ">
                {dt}
            </span>


        </div>

    )

}