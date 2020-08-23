import React, { useState, useEffect } from 'react'
import JobCard from './JobCard';

import styles from "./JobList.module.scss";

function JobList() {
    const [jobs,setJobs] = useState([]);

    useEffect(() => {
        const res = fetch("http://localhost:8000/v1/api/jobs").then(response => response.json()).then(data => {
            console.log(data)
            setJobs(data.data)
    });
    }, [])

    return (
        <div className={styles.jobListWrapper}>
            {
                jobs.map((job,index)=>{
                    return <JobCard job={job} key={index} />
                })
            }
        </div>
    )
}

export default JobList
