import React from "react";

export interface IClientsProps {};

const Clients: React.FC<IClientsProps> = (props) => {
    return (
      <>
          <h1 className="text-red-500">Clients</h1>
      </>
    );
};

export default Clients;