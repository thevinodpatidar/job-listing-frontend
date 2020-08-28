import React from 'react'
import JobList from './components/JobList';
import JobFilter from './components/JobFilter';

import styles from "./Jobs.module.scss";

function Jobs() {
    return (
        <>
        <div className={styles.searchWrapper}>
            <h1 >Search for your dream job</h1>
            <div className={styles.searchBarWrapper} >
                <input className={styles.searchBar} />
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <h3>44 job offer found</h3>
        </div>
        <div className={styles.jobWrapper}>
            <JobList />
            {/* <JobFilter /> */}
        </div>
        </>
    )
}

export default Jobs;
