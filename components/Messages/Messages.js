import React, { useRef } from 'react';
import { useMoralisQuery, useMoralis } from 'react-moralis'
import SendMessage from '../SendMessage/SendMessage';
import Message from '../Message/Message';

function Messages() {

    const { user } = useMoralis();
    const endOfMessages = useRef(null);

    const {data, loading, error} = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt'),
        [],
        {
            live: true,
        } 
    );

  return <div className='pb-56'>
      
      <div className='space-y-8 p-4'>
      {data.map(message => (
          <Message key={message.id} message={message}></Message>
      ))}
      </div>
      
      <div ref={endOfMessages} className='flex justify-center'>
        <SendMessage endOfMessages={endOfMessages} ></SendMessage>
      </div>
  </div>;
}

export default Messages;
