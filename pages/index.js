import Head from 'next/head'
import Login from '../components/Login/Login'
import { useMoralis } from 'react-moralis'

export default function Home() {

  const {isAuthenticated,logout} =  useMoralis();

  return (
    <div className='h-screen'>
      <Head>
        <title>Web3 Global chat dapp</title>
        <meta name="description" content="This is a web3.0 based Global chatting decentralised application made by Mohit Kothari." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        isAuthenticated
        ?
        <>
        <h1>Welcome to the App</h1>
        <button onClick={logout}>LogOut</button>
        </>
        :
        <Login></Login>
      }
    </div>
  )
}
