import React from 'react';

// Define the props interface
interface ActionProviderProps {
  createChatBotMessage: (message: string, options?: object) => void; // Assuming this is the signature of createChatBotMessage
  setState: React.Dispatch<React.SetStateAction<any>>; // Adjust according to your state structure
  children: React.ReactNode;
}

const ActionProvider: React.FC<ActionProviderProps> = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  // Implement your actions here

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          actions: {}, // You can pass your actions here
        });
      })}
    </div>
  );
};

export default ActionProvider;
