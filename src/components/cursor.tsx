import React from "react";
import gsap from "gsap";

export default function Cursor({
  container,
}: {
  container: React.RefObject<HTMLDivElement>;
}): JSX.Element {
  const cursor = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    container.current?.addEventListener("mousemove", (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
    });
  });
  return (
    <div
      className='absolute left-0 w-24 h-24 bg-red-600 rounded-full'
      ref={cursor}
    />
  );
}
