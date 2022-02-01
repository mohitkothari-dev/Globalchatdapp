import React from 'react';
import { useMoralis } from 'react-moralis';
import Avatar from '../Avatar/Avatar';

function Message({ message }) {

  const {user} = useMoralis();
  const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

  return <div className={`flex items-end space-x-2 relative ${
    isUserMessage && 'justify-end'
  }`}>

    <div className={`relative h-8 w-8 ${
      isUserMessage && 'order-last ml-2'
    }`}>
      <Avatar username={message.get('username')}></Avatar>
    </div>

    <div className={`flex space-x-4 px-3 py-3 rounded-lg ${
      isUserMessage ? 'rounded-br-none bg-pink-300' : 'rounded-bl-none bg-yellow-400'
    }`}>
    <p>{message.get('message')}</p>
    </div>

    <p className={`absolute -bottom-5 text-xs ${
      isUserMessage ? 'text-pink-300' : 'text-yellow-400'
    }`}>
      {message.get('username')}
    </p>
  </div>;
}

export default Message;