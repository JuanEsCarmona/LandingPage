import './Header.css';

function Header() {
    return (
        <>  
            {/* Header Section */}
            <header className="header">
                {/* Header Tittle */}
                <div className="header-content">
                    <h1 className="header-title">¡Welcome!</h1>
                    <p className="header-subtitle">We provide the best services for you.</p>
                </div>
                {/* Header Navigation Buttons */}
                <div className="navigation-buttons">
                    {/* Contact Form Button */}
                    <button className="button-ContactForm">    
                        <p className="descriptiontext-ContactForm">
                            Contact Us
                        </p>
                    </button>
                    <button className="button-ContactForm">    
                        <p className="descriptiontext-ContactForm">
                            Projects
                        </p>
                    </button>
                    <button className="button-ContactForm">    
                        <p className="descriptiontext-ContactForm">
                            Languages and Technologies
                        </p>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header