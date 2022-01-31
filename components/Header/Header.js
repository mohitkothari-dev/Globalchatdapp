import React from 'react';
import { useMoralis } from 'react-moralis';
import Avatar from '../Avatar/Avatar';
import ChangeUsername from '../ChangeUsername/ChangeUsername';

function Header() {

  const { user } = useMoralis();

  return <div>
      <div className='sticky top-0 p-5 z-50 bg-midnight_blue shadow-sm text-white border-b-2 border-gray-200'>
        <div className='text-left lg:text-center'>
          <div className='relative h-32 w-32 lg:mx-auto'>
            <Avatar logoutOnPress ></Avatar>
          </div>
          <h1 className='text-2xl'>Welcome to the Global Chat Dapp</h1>
          <h2>{user.getUsername()}</h2>
          <ChangeUsername></ChangeUsername>
        </div>
      </div>
  </div>;
}

export default Header;
