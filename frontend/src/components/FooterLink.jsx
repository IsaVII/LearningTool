function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-accent no-underline hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  );
}

export default FooterLink;
