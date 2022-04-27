import "./styles/App.css";
import Cursor from "./components/cursor";
import React from "react";
import gsap from "gsap";
import Link, { Button } from "./components/link";
import { randomInRange } from "./utils/utils";
import image from "./images/yarison.png";

/**
 * @component App, the main component
 * @returns {JSX.Element}
 */
function App(): JSX.Element {
  const [isLoading, setLoading] = React.useState(true);
  const container = React.useRef<HTMLDivElement>(null);
  const loader = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    gsap.to(loader.current, {
      width: "100%",
      duration: randomInRange(3, 6),
      ease: "power3.easeOut",
      onComplete: () => {
        setLoading(false);
        container.current?.classList.remove("dark");
      },
    });
    return () => {};
  }, []);
  return (
    <div className='app dark' ref={container}>
      <Cursor />
      {isLoading ? (
        <div className='w-full h-screen bg-[#0F172A] centered'>
          <div className='w-2/5 h-screen centered mersh'>
            <div className='bg-[#1E293B66] aspect-square w-full rounded-full centered'>
              <div>
                <h1 className='text-white text-9xl white'>Yarison...</h1>
                <div className='w-3/4 m-auto'>
                  <div>
                    <p className='py-2 text-center text-white'>loading</p>
                    <div className='relative w-full h-2.5 rounded-full bg-slate-900'>
                      <div
                        className=' w-0 h-2.5 rounded-full bg-slate-50'
                        ref={loader}
                      />
                      <p className='text-center text-white'>10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            {/* <div className='p-6 rounded-full bg-slate-200'> */}
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
            {/* </div> */}
          </div>
          <div className='content absolute top-0 w-full -z-[1]'>
            <div className='flex w-full'>
              <div className='w-1/2 h-screen flex items-center flex-wrap'>
                <div className='w-full'>
                  <h2 className='text-[#3730A3] text-2xl text-center'>
                    uwenayoallain
                  </h2>
                  <h1 className='text-center text-3xl font-[Pally-Bold]'>
                    UWENAYO Alain Pacifique
                  </h1>
                  <p className='text-center text-lg w-4/6 my-4 mx-auto'>
                    I am a Web{" "}
                    <span className='text-[#3730A3] italic'>
                      Developer & Designer
                    </span>
                    {"  "}
                    based in Rwanda 🇷🇼.currently learning new web technologies
                    and building awesome web applications.
                  </p>
                  <div className='w-max mx-auto'>
                    <Button>View CV</Button>
                  </div>
                  <div>
                    <Button c='aspect-auto rounded-l-none pl-0 !p-6'>
                      Available for Work
                    </Button>
                  </div>
                  <div className='absolute bottom-4 left-[10%]'>
                    <svg
                      width='16'
                      height='55'
                      viewBox='0 0 16 55'
                      className='inline-block fill-slate-900'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M7.29289 54.7071C7.68342 55.0976 8.31658 55.0976 8.7071 54.7071L15.0711 48.3431C15.4616 47.9526 15.4616 47.3195 15.0711 46.9289C14.6805 46.5384 14.0474 46.5384 13.6569 46.9289L8 52.5858L2.34314 46.9289C1.95262 46.5384 1.31945 46.5384 0.92893 46.9289C0.538406 47.3195 0.538406 47.9526 0.92893 48.3431L7.29289 54.7071ZM7 -4.37114e-08L7 54L9 54L9 4.37114e-08L7 -4.37114e-08Z'
                        fill='black'
                      />
                    </svg>
                    <p className='inline-block'>scroll</p>
                  </div>
                </div>
              </div>
              <div className='w-1/2 h-screen flex items-center flex-wrap mershed-background'>
                <div className='w-1/2 m-auto'>
                  <img src={image} alt={"Yarison | alain's face"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
