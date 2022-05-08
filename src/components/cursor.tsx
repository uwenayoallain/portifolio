import React from "react";
import gsap from "gsap";
/**
 * @function Cursor, a function  for a custom cursor
 * @returns {JSX.Element}
 */
function Cursor(): JSX.Element {
  const cursor = React.useRef<HTMLDivElement>(null);
  const cursorInner = React.useRef<HTMLDivElement>(null);

  /**
   * @function  hideCursor, a function to hide the cursor
   * @param outercursor HTMLDivElement, the outer cursor
   * @param innercursor HTMLDivElement, the inner cursor
   */
  const hideCursor = (
    outercursor: HTMLDivElement,
    innercursor: HTMLDivElement
  ) => {
    gsap.to([outercursor, innercursor], {
      opacity: 0,
      duration: 0.1,
      ease: "power3.ease",
    });
  };
  /**
   * @function showCursor, a function to show the cursor
   * @param outercursor HTMLDivElement, the outer cursor
   * @param innercursor HTMLDivElement, the inner cursor
   */
  const showCursor = (
    outercursor: HTMLDivElement,
    innercursor: HTMLDivElement
  ) => {
    gsap.to([innercursor, outercursor], {
      opacity: 1,
      duration: 0.1,
      ease: "power3.ease",
    });
  };
  /**
   * @function handleCursorMove, a function for moving the custom cursor
   * @param e MouseEvent, the event to use
   */
  const handleCursorMove = (e: MouseEvent) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
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
    const hoverableContainer = document.querySelectorAll(".cursor-hover");
    hoverableContainer.forEach((container) => {
      container.addEventListener("mouseenter", () =>
        hideCursor(cursor.current!, cursorInner.current!)
      );
      container.addEventListener("mouseleave", () =>
        showCursor(cursor.current!, cursorInner.current!)
      );
    });
  });

  // React.useEffect(() => {
  //   document.querySelectorAll(".button").forEach((button) => {
  //     button.addEventListener("mouseenter", () =>
  //       hideCursor(cursor.current!, cursorInner.current!)
  //     );
  //     button.addEventListener("mouseleave", () =>
  //       showCursor(cursor.current!, cursorInner.current!)
  //     );
  //   });
  // });
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
