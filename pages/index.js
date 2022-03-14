import Head from 'next/head';
import Banner from '../components/Banner';
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
      <Banner />
    </div>
  );
}
