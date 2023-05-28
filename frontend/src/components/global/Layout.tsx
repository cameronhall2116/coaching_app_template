import React from "react";
import { Outlet } from "react-router-dom";

export interface IClientsProps {};

const Clients: React.FC<IClientsProps> = (props) => {
    return (
      <>
          <h1 className="text-red-500">layout</h1>
          <Outlet />
      </>
    );
};

export default Clients;