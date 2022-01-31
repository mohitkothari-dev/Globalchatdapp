import React from 'react';
import Image from 'next/image';
import { useMoralis } from 'react-moralis';

function Login() {

  const { authenticate } = useMoralis();

  return <div className='bg-black relative'>
      <h1>I am the login screen</h1>
      <div className='flex flex-col absolute z-50 h-4/6 items-center justify-center w-full'>
        <button
        onClick={authenticate}
        className='bg-yellow-500 rounded-lg p-5 font-bold'>Login using MetaMask</button>
      </div>
      <div className='w-full h-screen'>
        <Image
        src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        layout='fill'
        objectFit='cover'
        ></Image>
      </div>
  </div>;
}

export default Login;
