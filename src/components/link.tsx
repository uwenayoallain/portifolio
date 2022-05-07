import React from "react";

/**
 * @component Link, custom links
 * @param to, the url to link to
 * @param c, the class to apply to the link
 * @param children, the text to display in the link
 * @returns {JSX.Element}
 */
function Link({
  to,
  children,
  c,
}: {
  to: string;
  children: React.ReactNode;
  c: string;
}): JSX.Element {
  return (
    <div className='inline-block relative'>
      <a href={to} className={`${c} link-hover`} data-text={children}>
        {children}
      </a>
    </div>
  );
}

/**
 * @component Button, custom buttons
 * @param children , the text to display in the button,
 * @optional c, the class to apply to the button
 * @returns {JSX.Element}
 */
function Button({
  children,
  c = " ",
  ...props
}: {
  children: React.ReactNode;
  c?: string;
  [key: string]: any;
}): JSX.Element {
  return (
    <div className='inline-block relative'>
      <button
        {...props}
        type='button'
        className={`p-8 text-lg bg-slate-900 text-white aspect-square rounded-full button overflow-hidden relative z-[1] ${c}`}>
        {children}
      </button>
    </div>
  );
}

export { Link, Button };
