import React from 'react';
import { useMoralis } from 'react-moralis';
import Avatar from '../Avatar/Avatar';

function Message({ message }) {

  const {user, Moralis} = useMoralis();
  const rec = message.get('ethAddress');
  const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

  const transferFunds = async () => {
    await Moralis.enableWeb3();
    await Moralis.transfer({native: "native", amount: Moralis.Units.ETH("0.001"), receiver: rec}); 
  }

  return <div className={`flex items-end space-x-2 relative ${
    isUserMessage && 'justify-end'
  }`}>

    <div className={`relative h-8 w-8 ${
      isUserMessage && 'order-last ml-2'
    }`} onClick={()=> transferFunds()}>
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
      {message.get('username')} - {message.get('ethAddress')}
    </p>
  </div>;
}

export default Message;
