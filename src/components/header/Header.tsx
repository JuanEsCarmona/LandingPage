import "./Header.css";

function Header() {
  return (
    <>
      {/* Header Navigation Buttons */}
      <nav className="navigation-buttons">
        {/* Contact Form Button */}
        <button className="buttonNav">
          <p className="descriptiontextContact">Home</p>
        </button>
        <button className="buttonNav">
          <p className="descriptiontextProjects">Projects</p>
        </button>
        <button className="buttonNav">
          <p className="descriptiontextLanguages">
            Languages and Technologies
          </p>
        </button>
        <button className="buttonNav">
          <p className="descriptiontextLanguages">
            Contact
          </p>
        </button>
      </nav>
    </>
  );
}

export default Header;
