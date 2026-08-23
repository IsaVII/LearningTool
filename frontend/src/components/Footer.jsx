import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className="bg-navbar text-white py-8 mt-16 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Learning Tool. All rights reserved.
        </p>
        <div className="flex gap-8 justify-center mt-4">
          <FooterLink href="#privacy">Privacy Policy</FooterLink>
          <FooterLink href="#terms">Terms of Service</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
