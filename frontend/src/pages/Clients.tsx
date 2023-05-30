import React from "react";

export interface IClientsProps {};

const Clients: React.FC<IClientsProps> = (props) => {
    return (
      <div className="flex space-x-4 p-4">
          <div className="text-black font-bold pl-4 pt-4 h-52 w-72 bg-white rounded-xl shadow-xl shadow-slate-400">Clients</div>
          <div className="text-black font-bold flex-grow pl-4 pt-4 h-52 bg-white rounded-xl shadow-xl shadow-slate-400">More data</div>
      </div>
    );
};

export default Clients;