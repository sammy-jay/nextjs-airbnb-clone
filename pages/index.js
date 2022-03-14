import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Largecard from '../components/Largecard';
import Mediumcard from '../components/Mediumcard';
import Smallcard from '../components/Smallcard';

export default function Home({ exploreData, cardsData }) {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <Smallcard key={item.img} item={item} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-5">Live Anywhere</h2>
          <div className="flex overflow-scroll scrollbar-hide p-3 space-x-3">
            {cardsData?.map((item) => (
              <Mediumcard key={item.img} item={item} />
            ))}
          </div>
        </section>
        <Largecard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );
  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  );
  return {
    props: { exploreData, cardsData },
  };
}
