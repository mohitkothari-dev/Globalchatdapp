import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';

function SendMessage({ endOfMessages }) {

    const {user,Moralis} = useMoralis();
    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend('Messages');
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress'),
        }).then((message) => {
            //saved
        }, (error) => {
            console.log(error.message);
        } 
        );
        endOfMessages.current.scrollIntoView({ behavior: 'smooth' });
        setMessage("");
    }

  return <form className='flex fixed bottom-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80 w-11/12 px-6 py-2 max-w-2xl shadow-xl rounded-full border-none'>
      <input 
      className='flex-grow outline-none bg-transparent text-white placeholder-white pr-4' 
      placeholder={`Enter a Message ${user.getUsername()}...`}
      type="text" 
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      />
      <button
      type='submit'
      onClick={sendMessage}
      className='font-bold text-white'
      >Send</button>
  </form>;
}

export default SendMessage;
