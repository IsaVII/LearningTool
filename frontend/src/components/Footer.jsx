function Footer() {
  return (
    <footer className="bg-slate-700 text-white py-8 mt-16 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Learning Tool. All rights reserved.
        </p>
        <div className="flex gap-8 justify-center mt-4">
          <a
            href="#privacy"
            className="text-blue-500 no-underline hover:text-white transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-blue-500 no-underline hover:text-white transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#contact"
            className="text-blue-500 no-underline hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
