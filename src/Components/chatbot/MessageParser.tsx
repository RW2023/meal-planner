import React from 'react';

// Define the interface for the actions object
interface Actions {
  sendMessage: (message: string) => void;
  // Additional actions can be defined here
}

// Define a common props type for child components of MessageParser
interface MessageParserChildProps {
  parse: (message: string) => void;
  actions: Actions;
}

interface MessageParserProps {
  children:
    | React.ReactElement<MessageParserChildProps>[]
    | React.ReactElement<MessageParserChildProps>;
  actions: Actions;
}

const MessageParser: React.FC<MessageParserProps> = ({ children, actions }) => {
  const parse = (message: string) => {
    console.log('Parsed message:', message);
    actions.sendMessage(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { parse, actions })
          : child,
      )}
    </div>
  );
};

// ChildComponent now explicitly uses MessageParserChildProps
const ChildComponent: React.FC<MessageParserChildProps> = ({
  parse,
  actions,
}) => {
  const handleClick = () => {
    parse('Hello, world!');
  };

  return (
    <div>
      <button onClick={handleClick}>Send Message</button>
    </div>
  );
};

// Example usage of MessageParser
const App: React.FC = () => {
  const actions: Actions = {
    sendMessage: (message: string) => {
      console.log('Message sent:', message);
    },
    // Define other actions here
  };

  return (
    <MessageParser actions={actions}>
      {/* <ChildComponent /> */}
    </MessageParser>
  );
};

export default App;
