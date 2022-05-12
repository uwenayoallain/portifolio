import "./styles/App.css";
import React from "react";
import Link from "./components/link";
import Button from "./components/button";
import image from "./images/yarison.png";
import Loader from "./components/loader";

/**
 * @component App, the main component
 * @returns {JSX.Element}
 */

function App(): JSX.Element {
  const container = React.useRef<HTMLDivElement>(null);
  const [isLoading, setLoading] = React.useState(true);
  return (
    <div className='app dark' ref={container}>
      {isLoading ? (
        <Loader container={container} setState={() => setLoading(false)} />
      ) : (
        <div>
          <div className='m-4 flex justify-between items-center'>
            <div className='w-32 h-12 logo' />
            <div className='p-4'>
              <Link to='' c='link'>
                Home
              </Link>
              <Link to='#About' c='link'>
                About
              </Link>
              <Link to='#Projects' c='link'>
                Projects
              </Link>
              <Link to='#Contact' c='link'>
                Contact
              </Link>
            </div>

            <Button>
              <svg
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect y='12' width='36' height='6' rx='5' fill='currentColor' />
                <rect y='24' width='36' height='6' rx='5' fill='currentColor' />
              </svg>
            </Button>
          </div>
          <div className='content absolute top-0 w-full -z-[1]'>
            <div className='flex h-screen relative'>
              <div className='w-1/2 flex items-center flex-wrap'>
                <div className='w-full'>
                  <h2 className='text-[#3730A3] text-2xl text-center'>
                    uwenayoallain
                  </h2>
                  <h1 className='text-center text-3xl font-[Pally-Bold]'>
                    UWENAYO Alain Pacifique
                  </h1>
                  <p className='text-center text-lg w-4/6 my-4 mx-auto'>
                    I am a Web{" "}
                    <span className='text-[#3730A3] mr-2 italic'>
                      Developer & UX/UI Designer
                    </span>
                    based in Rwanda 🇷🇼.currently learning new web technologies
                    and building awesome web applications.
                  </p>
                  <a className='absolute bottom-1 left-5 group' href='#scroll'>
                    <svg
                      width='16'
                      height='55'
                      viewBox='0 0 16 55'
                      className='inline-block transition group-hover:animate-hover'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M7.29289 54.7071C7.68342 55.0976 8.31658 55.0976 8.7071 54.7071L15.0711 48.3431C15.4616 47.9526 15.4616 47.3195 15.0711 46.9289C14.6805 46.5384 14.0474 46.5384 13.6569 46.9289L8 52.5858L2.34314 46.9289C1.95262 46.5384 1.31945 46.5384 0.92893 46.9289C0.538406 47.3195 0.538406 47.9526 0.92893 48.3431L7.29289 54.7071ZM7 -4.37114e-08L7 54L9 54L9 4.37114e-08L7 -4.37114e-08Z'
                        className='fill-slate-900'
                      />
                    </svg>
                    <p className='inline-block group-hover:animate-italic transition'>
                      Scroll
                    </p>
                  </a>
                </div>
              </div>
              <div className='w-1/2 h-full flex items-center flex-wrap mershed-background relative'>
                <div className='overlay' />
                <div className='w-1/2 m-auto z-10'>
                  <img
                    src={image}
                    alt={"Yarison | alain's face"}
                    className='rounded-full'
                  />
                </div>
              </div>
            </div>
            <div className='flex flex-wrap'>
              <div className='w-full pl-10 p-2'>
                <h2 className='text-[#3730A3] text-lg font-[Pally-Bold]'>
                  Services
                </h2>
                <h1 className='text-6xl font-[Pally-Bold]'>
                  <span className='span block'>Developer | Designer</span>I help
                  out Companies around the world to build web-based
                  applications, and I also help out businesses to build their
                  own websites.{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
