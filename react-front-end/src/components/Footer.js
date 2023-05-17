import React from "react";

export default function Footer(props) {
  return (
    <footer className="black-footer">
      <div className="footer-content">
        <h2 className="footer-title">Plan, Execute, Consist.</h2>
        <p className="footer-description">
          We're a team of passionate individuals with diverse backgrounds who take full ownership of your workout plan and empower you to achieve your fitness goals. We're agile and always ready to adapt to your needs, and we genuinely enjoy helping you achieve great results.
        </p>
        <div className="footer-icons">
          <a href="https://github.com/Jeri-Code/ExerLog" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
        <p className="footer-rights">© {new Date().getFullYear()} ExerLog. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
