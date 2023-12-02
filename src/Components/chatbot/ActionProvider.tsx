import React from 'react';
import OpenAI from 'openai';

interface ActionProviderProps {
  createChatBotMessage: (message: string, options?: object) => React.ReactNode;
  setState: React.Dispatch<React.SetStateAction<any>>;
  children: React.ReactNode;
}

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY as string, // Type assertion for the API key
});

const ActionProvider: React.FC<ActionProviderProps> = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  const getResponseFromOpenAI = async (userInput: string) => {
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: userInput }],
        model: 'gpt-3.5-turbo',
      });

      // Check if content is not null before using it
      const content = chatCompletion.choices[0].message.content;
      const aiMessageText = content ? content : "Sorry, I didn't get that.";
      const aiMessage = createChatBotMessage(aiMessageText);
      updateChatbotState(aiMessage);
    } catch (error) {
      const errorMessage = createChatBotMessage(
        'An error occurred while contacting the AI service.',
      );
      updateChatbotState(errorMessage);
    }
  };


  const updateChatbotState = (message: React.ReactNode) => {
    setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, {
          actions: { getResponseFromOpenAI },
        });
      })}
    </div>
  );
};

export default ActionProvider;
