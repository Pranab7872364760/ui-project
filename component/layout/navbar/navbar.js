
import React from 'react';
import styles from '../../../styles/Navbar.module.css';



export default function Navbar() {


  function openNav() {
    document.getElementById("mySidenav").style.width = '260px'

};

function closeNav() {
    document.getElementById("mySidenav").style.width = '0px';
};

return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light float-end">
            <button className={["navbar-toggler", styles.btn].join(' ')} type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span onClick={openNav} className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse'>
                <ul className="navbar-nav ml-auto">
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#banner">Banner</a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" style={{fontSize:'3ch'}} href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{fontSize:'3ch'}} href="#expertise">Expertise</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{fontSize:'3ch'}} href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{fontSize:'3ch'}} href="#scoutsprogram">Scouts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{fontSize:'3ch'}} href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav >
        <div className={styles.sidenav} id='mySidenav'>
            <a className={styles.closebtn} onClick={closeNav}>&times;</a>
                {/* <li className="nav-item">
                    <a className="nav-link text-white" href="#banner">Banner</a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link text-white" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#expertise">Expertise</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#scoutsprogram">Scouts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="#contact">Contact</a>
                </li>
        </div>
    </div>
);
}
// style={{display:'flex', justifyContent:'flex-end', alignItems:'right !important', alignContent:'right !important'}}