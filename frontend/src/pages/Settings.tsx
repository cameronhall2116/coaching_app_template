import React from "react";

export interface ISettingsProps {};

const Settings: React.FC<ISettingsProps> = (props) => {
    return (
      <>
        <h1 className="text-red-500">Settings</h1>
      </>
    );
};

export default Settings;