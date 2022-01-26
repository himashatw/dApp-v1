import Head from 'next/head';
import Login from '../components/Login';
import { useMoralis } from 'react-moralis';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  // const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>Welcome to app</h2>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
}
