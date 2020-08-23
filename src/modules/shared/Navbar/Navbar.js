import React from 'react'
import styles from "./Navbar.module.scss";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
          <div className={styles.navbarWrapper}>
              <div className={styles.logo}><h3>getjobs</h3></div>
              <ul className={styles.links}>
                  <Link className={styles.link} to="">Jobs</Link>
                  <Link className={styles.link} to="">Login</Link>
                  <button>Be a Recruiter</button>
              </ul>
          </div>
    )
}

export default Navbar;
