import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Programs from "./pages/Programs";
import Nutrition from "./pages/Nutrition";
import Layout from "./components/global/Layout";
import Forms from "./pages/Forms";
import Settings from "./pages/Settings";

export interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
	return (
  <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="clients" element={<Clients />} />
          <Route path="messages" element={<Messages />} />
          <Route path="programs">
            <Route index element={<Programs />} />
            <Route path="nutrition" element={<Nutrition />} />
          </Route>
          <Route path="forms" element={<Forms />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
  </BrowserRouter>
  )
};

export default App;

