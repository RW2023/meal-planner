import React from 'react';

// Define the interface for the actions object
interface Actions {
  // Define the structure of your actions here
  // For example:
  // sendMessage: (message: string) => void;
  // You can add more actions as needed
}

interface MessageParserProps {
  children: React.ReactNode;
  actions: Actions;
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string) => {
    console.log(message);
    // You can use actions here as needed
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          parse: parse,
          actions: actions, // Pass the actions as is or modify as needed
        });
      })}
    </div>
  );
};

export default MessageParser;
