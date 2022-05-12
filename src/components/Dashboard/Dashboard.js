import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Calendar from "./Calendar";
import ProjectOverview from "./ProjectsOverview";
import FinancesOverview from "./FinancesOverview";
import HROverview from "./HROverview";
import TeamOverview from "./TeamOverview";
import Scope from "./Scope";

export default function Dashboard() {
  const [dash] = useState(false);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="bg-black">
        <h1 className="text-[red] text-5xl font-extrabold grid place-items-center align-items-center">
          Overview
        </h1>
        <div className="text-[red]">
          <Calendar />
        </div>
        <div className="">
          <Scope />
          <ProjectOverview />
          <FinancesOverview />
          <HROverview />
          <TeamOverview />
        </div>
      </div>
    </div>
  );
}
