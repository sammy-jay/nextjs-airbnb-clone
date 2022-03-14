import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AirBNB Clone</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
    </div>
  );
}
