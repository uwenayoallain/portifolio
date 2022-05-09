import React from "react";
import gsap from "gsap";
import { randomInRange } from "../utils/utils";

/**
 *
 * @param container the container to render the loader
 * @returns {JSX.Element}
 */

export default function Loader({
  container,
}: {
  container: React.RefObject<HTMLDivElement>;
}): JSX.Element {
  const loader = React.useRef<HTMLDivElement>(null);
  const [isLoading, setLoading] = React.useState(true);

  /**
   * @function handleLoad, a function to handle the load event
   * @returns {void}
   */

  const handleLoading = (): void => {
    setTimeout(() => {
      setLoading(false);
    }, randomInRange(3000, 5000));
  };

  React.useEffect(() => {
    window.addEventListener("load", handleLoading);
    gsap.to(loader.current, {
      width: "100%",
      duration: 5,
      ease: "power3.easeOut",
      onComplete: () => {
        setLoading(false);
        container.current?.classList.remove("dark");
      },
    });
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className='w-full h-screen bg-[#0F172A] centered cursor-hover'>
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
      ) : null}
    </>
  );
}
