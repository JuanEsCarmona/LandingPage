import "./Header.css";

function Header() {
  return (
    <>
      {/* Header Navigation Buttons */}
      <nav className="navigation-buttons">
        {/* Contact Form Button */}
        <button className="button-ContactForm">
          <p className="descriptiontext-ContactForm">Contact Us</p>
        </button>
        <button className="button-ContactForm">
          <p className="descriptiontext-ContactForm">Projects</p>
        </button>
        <button className="button-ContactForm">
          <p className="descriptiontext-ContactForm">
            Languages and Technologies
          </p>
        </button>
      </nav>
    </>
  );
}

export default Header;
