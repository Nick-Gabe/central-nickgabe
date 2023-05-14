import Image from 'next/image';

export const Background = () => {
  return (
    <div className="w-full h-full fixed top-[300px] -z-10">
      <Image
        className="w-full"
        src="/extras/bg-wave.svg"
        alt=""
        width={100}
        height={21}
      />
      <div className="h-full w-full bg-brightPurple"></div>
    </div>
  );
};
