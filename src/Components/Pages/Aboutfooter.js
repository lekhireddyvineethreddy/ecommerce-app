import React from "react";
import "./Aboutfooter.css";
import "@fortawesome/fontawesome-free/css/all.css"; 

const Aboutfooter = () => {
    return (
        <div className="about-footer">
            <div className="heading">
                <h1>The Generics</h1>
            </div>
            <div className="social-icons">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-spotify"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
            </div>
        </div>
    );
}

export default Aboutfooter;