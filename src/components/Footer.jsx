const Footer = () => {
  return (
    <footer className="reveal site-footer">
      <div className="container footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} Bhavana Sharma</p>
        <div className="footer-links" aria-label="Footer links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
