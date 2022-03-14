import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Smallcard from '../components/Smallcard';

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>AirBNB Clone</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from the server */}
          {exploreData?.map((item) => (
            <Smallcard key={item.img} item={item} />
          ))}
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  return {
    props: { exploreData },
  };
}
