import React from "react";
import { Outlet } from "react-router-dom";

export interface IProgramsProps {};

const Programs: React.FC<IProgramsProps> = (props) => {
    return (
      <>
            <h1 className="text-red-500">Programs</h1>
      </>
    );
};

export default Programs;