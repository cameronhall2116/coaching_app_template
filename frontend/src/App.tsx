import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Programs from "./pages/Programs";
import Nutrition from "./pages/Nutrition";
import Layout from "./components/global/Layout";

export interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
	return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/Programs" element={<Programs />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
};

export default App;

