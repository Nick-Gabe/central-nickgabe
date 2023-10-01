import { Hammersmith_One } from 'next/font/google';

const hammersmith = Hammersmith_One({
  subsets: ['latin'],
  weight: '400',
});

export const Title = () => (
  <h1
    className={`relative flex flex-col items-center text-center text-6xl font-bold mb-10 pt-20 sm:pt-0 select-none after:absolute after:bottom-[15px] after:w-[120%] after:max-w-[95vw] after:h-[8px] after:bg-primary after:rounded-xl after:border-2 ${hammersmith.className}`}
  >
    <span className="text-primary font-hammersmith solidShadow">CENTRAL</span>
    <span className="text-white font-inter relative bottom-5 z-10  solidShadow">
      nick gabe
    </span>
  </h1>
);
