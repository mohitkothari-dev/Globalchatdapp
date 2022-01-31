import React from 'react';
import { useMoralis } from 'react-moralis';

function ChangeUsername() {

    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = () => {
        const username = prompt(
            `Enter your new Username (current: ${user.getUsername()})`
        );

        if (!username) return;

        setUserData({
            username: username,
        })
    }

  return <div className='text-sm absolute top-2 right-5'>
      <button
      disabled={isUserUpdating}
      onClick={setUsername} 
      className='hover:text-gray-200'>Change Username</button>
  </div>;
}

export default ChangeUsername;
