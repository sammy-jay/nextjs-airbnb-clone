import Image from 'next/image';
const Largecard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative cursor-pointer">
      <div className="relative min-width-[300px] h-96">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div></div>
    </section>
  );
};

export default Largecard;
