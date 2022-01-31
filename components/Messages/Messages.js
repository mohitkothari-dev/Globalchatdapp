import React from 'react';
import { ByMoralis, useMoralisQuery } from 'react-moralis'
import SendMessage from '../SendMessage/SendMessage';
import Message from '../Message/Message';

function Messages() {

    const {data, loading, error} = useMoralisQuery(
        'Messages',
        (query) => query.ascending('createdAt'),
        [],
        {
            live: true,
        } 
    );

  return <div className='pb-50'>
      <div className='my-2'>
          <ByMoralis
          variant='dark'
          style={{marginLeft: 'auto', marginRight: 'auto'}}
          ></ByMoralis>
      </div>
      
      <div className='space-y-8 p-4'>
      {data.map(message => (
          <Message key={message.id} message={message}></Message>
      ))}
      </div>

      <div className='flex justify-center'>
        <SendMessage></SendMessage>
      </div>
  </div>;
}

export default Messages;
