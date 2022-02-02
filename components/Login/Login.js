import React from 'react';
import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {

  const { authenticate, isAuthenticating, authError } = useMoralis();

  return <div className='bg-black relative'>
      <div className='flex flex-col absolute z-50 h-screen items-center justify-center w-full'>
        <button
        onClick={authenticate}
        className='bg-yellow-500 rounded-lg p-5 font-bold'>{ isAuthenticating ? 'Authenticating...' : 'Login using MetaMask'}</button>
        {authError && 
        <h1 className='font-bold'>{authError.message}</h1>}
      </div>
      <div className='w-full h-screen'>
        <Image
        src="https://images.pexels.com/photos/1036637/pexels-photo-1036637.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        layout='fill'
        objectFit='cover'
        ></Image>
      </div>
  </div>;
}

export default Login;
