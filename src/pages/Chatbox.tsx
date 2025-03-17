
import React from 'react';
import { MessageInput } from "@/components/MessageInput";

const Chatbox = () => {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <MessageInput placeholder="Spør om hva som helst..." className="w-full max-w-2xl" />
    </div>
  );
};

export default Chatbox;
