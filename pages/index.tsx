import Head from 'next/head';
import Login from '../components/Login';
import Header from '../components/Header';
import { useMoralis } from 'react-moralis';
import Messages from '../components/Messages';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  // const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="h-screen overflow-hidden overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Metaverse Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Welcome to app</h2>

      <div className="mx-auto max-w-screen-2xl">
        {/* HEADER */}
        <Header />
        <Messages />

        {/* MESSAGE */}
      </div>
    </div>
  );
}
