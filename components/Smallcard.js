import Image from 'next/image';

const Smallcard = ({ item: { img, location, distance } }) => {
  return (
    <div className="flex items-center">
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2>{location}</h2>
        <h2>{distance}</h2>
      </div>
    </div>
  );
};

export default Smallcard;
