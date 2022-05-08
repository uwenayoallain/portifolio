import React from "react";
type MoverProps = {
  event: string;
  target: HTMLElement;
  container: HTMLElement;
  type: string;
};

function useMover({ event, target, container, type }: MoverProps) {
  const handleCursorMove = (e: MouseEvent) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    gsap.to(target, {
      x: mouseX + target.offsetWidth * 2,
      y: mouseY + target.offsetHeight * 2,
      duration: 0.5,
      ease: "power3.ease",
    });
  };
  React.useEffect(() => {
    container.addEventListener(event, (e) => handleCursorMove(e));
    return () => {
      container.removeEventListener(event, (e) => handleCursorMove(e));
    };
  }, []);
}

export default useMover;
