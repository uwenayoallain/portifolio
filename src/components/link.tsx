const Link = ({
  to,
  children,
  className,
}: {
  to: string;
  children: string;
  className: string;
}) => {
  return (
    <div className='inline-block relative'>
      <a href={to} className={`${className} link-hover`} data-text={children}>
        {children}
      </a>
    </div>
  );
};

export default Link;
