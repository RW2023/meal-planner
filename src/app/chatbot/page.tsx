//src/app/chatbot/page.tsx
'use client';
import { FC } from 'react';
import Chatbot from 'react-chatbot-kit';
import config from '@/Components/chatbot/config';
import MessageParser from '@/Components/chatbot/MessageParser';
import ActionProvider from '@/Components/chatbot/ActionProvider';

interface Props {}

const Page: FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default Page;
