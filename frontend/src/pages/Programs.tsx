import React from "react";

export interface IProgramsProps {};

const Programs: React.FC<IProgramsProps> = (props) => {
    return (
      <>
        <a href="/nutrition">
            <button className="bg-blue-500 rounded-xl">Nutrition</button>
        </a>
      </>
    );
};

export default Programs;