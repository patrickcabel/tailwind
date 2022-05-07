import React from "react";
import Moment from "react-moment";
import moment from "moment";

export default function Calendar() {
    const [time, setTime] = React.useState(new Date().toLocaleString());

    React.useEffect(() => {
        let secTimer = setInterval(() => {
            setTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(secTimer);
    }, []);
    
  return (
    <div class=" bg-[#6E30E9] justify-items-center rounded-full h-[350px] border-2  w-[350px] shadow-black shadow-xl static">
        <span>
        {time}
        </span>
    </div>
  );
}
