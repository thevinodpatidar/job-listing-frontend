import React from 'react'
import styles from "./Navbar.module.scss";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
          <div className={styles.navbarWrapper}>
              <div className={styles.logo}>
                <Link className={styles.logoLink} to="/" ><h3>getjobs</h3></Link>
              </div>
              <ul className={styles.links}>
                <Link className={styles.link} to="/jobs">Jobs</Link>
                <Link className={styles.link} to="/login">Login</Link>
                <button>Be a Recruiter</button>
              </ul>
          </div>
    )
}

export default Navbar;
