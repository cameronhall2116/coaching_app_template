import React from "react";

export interface IExerciseLibraryProps {};

const ExerciseLibrary: React.FC<IExerciseLibraryProps> = (props) => {
    return (
      <>
          <h1 className="text-red-500">Exercise Library</h1>
      </>
    );
};

export default ExerciseLibrary;