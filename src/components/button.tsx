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

export default Button;
