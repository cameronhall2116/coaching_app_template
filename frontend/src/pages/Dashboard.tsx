import React from "react";

export interface IDashboardProps {};

const Dashboard: React.FC<IDashboardProps> = (props) => {
    return (
      <>
          <h1 className="text-red-500">Dashboard</h1>
      </>
    );
};

export default Dashboard;
