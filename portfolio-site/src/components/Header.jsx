import React from 'react';
import '../stylesheets/header.css';

const Header = () => {
  return (
    <>
        <div>
            <div>
                <h3>Sujith</h3>
            </div>
            <div>
                <ul className="flex items-center">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header;