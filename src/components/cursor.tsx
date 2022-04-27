import React from "react";
import gsap from "gsap";
/**
 * @function Cursor, a function  for a custom cursor
 * @returns {JSX.Element}
 */
function Cursor(): JSX.Element {
  const cursor = React.useRef<HTMLDivElement>(null);
  const cursorInner = React.useRef<HTMLDivElement>(null);
  const handleCursorMove = (e: MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    gsap.to(cursor.current, {
      x: mouseX + cursorInner.current!.offsetWidth * 2,
      y: mouseY + cursorInner.current!.offsetHeight * 2,
      duration: 0.5,
      ease: "power3.ease",
    });
    gsap.set(cursorInner.current, {
      x: mouseX + cursorInner.current!.offsetWidth * 2,
      y: mouseY + cursorInner.current!.offsetHeight * 2,
    });
  };
  React.useEffect(() => {
    document.addEventListener("mousemove", (e) => handleCursorMove(e));
  }, []);

  React.useEffect(() => {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        gsap.to([cursor.current, cursorInner.current], {
          opacity: 0,
          duration: 0.1,
          ease: "power3.ease",
        });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to([cursor.current, cursorInner.current], {
          opacity: 1,
          duration: 0.1,
          ease: "power3.ease",
        });
      });
    });
  });

  React.useEffect(() => {
    document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(cursor.current, {
          scale: 2,
          duration: 0.1,
          ease: "power3.ease",
        });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(cursor.current, {
          scale: 1,
          duration: 0.1,
          ease: "power3.ease",
        });
      });
    });
  });
  return (
    <>
      <div
        className='absolute pointer-events-none z-50 w-10 h-10 border-2 rounded-full -top-9 -left-9 border-slate-900 dark:border-white'
        ref={cursor}
      />
      <div
        className='absolute pointer-events-none z-50 w-2 h-2 rounded-full -top-5 -left-5 bg-slate-900 dark:bg-white'
        ref={cursorInner}
      />
    </>
  );
}

export default Cursor;
