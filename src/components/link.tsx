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

export default Link;
