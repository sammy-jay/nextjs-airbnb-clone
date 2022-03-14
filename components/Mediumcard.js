import Image from 'next/image';

const Mediumcard = ({ item: { img, title } }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out rounded-xl">
      <div className="relative w-80 h-80">
        <Image src={img} layout="fill" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default Mediumcard;
