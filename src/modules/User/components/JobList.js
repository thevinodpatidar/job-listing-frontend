import React, { useState, useEffect } from 'react'
import JobCard from './JobCard';

import styles from "./JobList.module.scss";
import { Link, useRouteMatch } from 'react-router-dom';

function JobList() {
    const [jobs,setJobs] = useState([]);
    const match = useRouteMatch();
    console.log(match);
    useEffect(() => {
        fetch("https://api-getjob.herokuapp.com/v1/api/jobs").then(response => response.json()).then(data => {
            console.log(data)
            setJobs(data.data)
    });
    }, [])

    return (
        <div className={styles.jobListWrapper}>
            {
                jobs.map((job,index)=>{
                    return <Link className={styles.job} to={`/jobs/${job.id}`} key={index}><JobCard job={job} /></Link>
                })
            }
        </div>
    )
}

export default JobList
