import React from 'react';
import '../stylesheets/header.css';

const Header = () => {
  return (
    <>
        <div className='top-bar'>
            <div>
                <h3>Sujith</h3>
            </div>
            <div>
                <ul className='links'>
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