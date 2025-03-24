import Image from 'next/image';
import mobDark from './../images/bg-mobile-dark.jpg';
import desDark from './../images/bg-desktop-dark.jpg';
import mobLight from './../images/bg-mobile-light.jpg';
import desLight from './../images/bg-desktop-light.jpg';

const Header = () => {
  return (
    <header className="w-[100dvw] h-400H">
      {/* DARK THEME */}
      <Image
        src={mobDark}
        className="w-full lg:hidden"
        alt=""
        aria-hidden="true"
      />
      <Image
        src={desDark}
        className="hidden w-full lg:block"
        alt=""
        aria-hidden="true"
      />
      {/* LIGHT THEME */}
      {/* <Image
        src={mobLight}
        className="w-full lg:hidden"
        alt=""
        aria-hidden="true"
      />
      <Image
        src={desLight}
        className="hidden w-full lg:block"
        alt=""
        aria-hidden="true"
      /> */}
    </header>
  );
};

export default Header;
