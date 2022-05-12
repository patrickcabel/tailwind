import React from "react";

export default function Calendar() {
  const [month, setMonth] = React.useState(new Date().getMonth() + 1);
  const [day, setDay] = React.useState(new Date().getDay());
  const [time, setTime] = React.useState(
    new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds()
  );
  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    let secTimer = setInterval(() => {
      setTime(
        new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds()
      );
      setMonth(new Date().getMonth() + 1);
      setDay(new Date().getDay() + 1);
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <div class="text-[red] text-center text-4xl font-extrabold grid place-items-end pb-3 mb-3 ">
      <div class=" flex flex-col justify-items-center  ">
        {/* <span class="grid place-items-center leading-[3rem]">{month}</span>
          <span class="grid place-items-center leading-[1.5rem]">{day}</span> */}
        <span class="grid place-items-center leading-[0.10] p-3">{time}</span>
        {/* <span class="grid place-items-center leading-[1.5rem]">{year}</span> */}
      </div>
    </div>
  );
}
