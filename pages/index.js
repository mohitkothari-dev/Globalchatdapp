import Head from 'next/head'
import Login from '../components/Login/Login'
import { useMoralis } from 'react-moralis'
import Header from '../components/Header/Header';
import Messages from '../components/Messages/Messages';

export default function Home() {

  const {isAuthenticated} =  useMoralis();

  return (
    <div className='h-screen overflow-y-scroll bg-wet_asphalt overflow-hidden'>
      <Head>
        <title>Web3 Global chat dapp</title>
        <meta name="description" content="This is a web3.0 based Global chatting decentralised application made by Mohit Kothari." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        isAuthenticated
        ?
        <>
          <div className='max-w-screen-2xl mx-auto'>
            <Header></Header>
            <Messages></Messages>
          </div>
        </>
        :
        <Login></Login>
      }
    </div>
  )
}
