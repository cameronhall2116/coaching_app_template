import React from "react";

export interface ISettingsProps {};

const Settings: React.FC<ISettingsProps> = (props) => {
    return (
      <>
        <a href="/nutrition">
            <button className="bg-blue-500 rounded-xl">Nutrition</button>
        </a>
      </>
    );
};

export default Settings;