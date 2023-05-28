import React from "react";

export interface IMessagesProps {};

const Messages: React.FC<IMessagesProps> = (props) => {
    return (
      <>
          <h1 className="text-red-500">Messages</h1>
      </>
    );
};

export default Messages;