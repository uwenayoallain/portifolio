import "./styles/App.css";
import Cursor from "./components/cursor";
import React from "react";
import gsap from "gsap";
import Link from "./components/link";

/**
 * @component App, the main component
 * @returns {JSX.Element}
 */
function App(): JSX.Element {
  const [isLoading, setLoading] = React.useState(true);
  const container = React.useRef<HTMLDivElement>(null);
  const loader = React.useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = React.useState(0);
  React.useEffect(() => {
    setIndicator(10);
    gsap.to(loader.current, {
      width: "100%",
      duration: 5,
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
                        data-value={indicator}
                      />
                      <p className='text-center text-white'>
                        {loader.current?.getAttribute("data-value")}%
                      </p>
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
            <div className='w-32 h-12 logo'></div>
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
            <div className='p-6 rounded-full bg-slate-200'>
              <svg
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect y='12' width='36' height='6' rx='5' fill='#0F172A' />
                <rect y='24' width='36' height='6' rx='5' fill='#0F172A' />
              </svg>
            </div>
          </div>
          <div className='content absolute top-0 w-full -z-[1]'>
            <div className='flex w-full'>
              <div className='w-1/2 h-screen flex items-center flex-wrap'>
                <div className='w-full'>
                  <h1 className='text-[#3730A3] text-2xl text-center'>
                    uwenayoallain
                  </h1>
                  <h1 className='text-center '>Web Developer & Designer</h1>
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
