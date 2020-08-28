import React, { useState, useEffect } from 'react'
import JobCard from './JobCard';

import styles from "./JobList.module.scss";
import { Link, useRouteMatch } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';

function JobList() {
    const [jobs,setJobs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    // const match = useRouteMatch();
    const fetchJobs = async()=>{
        const res = await fetch("https://api-getjob.herokuapp.com/v1/api/jobs");
        // const res = await fetch("https://api-getjob.herokuapp.com/v1/api/jobs");
        const data = await res.json();
        setJobs(data.data);
        setIsLoading(false);

    }
    useEffect(() => {
        // setIsLoading(true);
        fetchJobs()
    }, [])

    return (
        <div className={styles.jobListWrapper}>
            {
                isLoading ? <Loader />
                :
                jobs.map((job,index)=>{
                    return <JobCard key={index} job={job} />
                })
            }
        </div>
    )
}

export default JobList
