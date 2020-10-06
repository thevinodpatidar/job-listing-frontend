import React from 'react'
import styles from "./JobCard.module.scss";
import { Link } from 'react-router-dom';

function JobCard(props) {
    console.log(props);
    return (
        <Link className={styles.job} to={`/jobs/${props.job.id}`}>
        <div className={styles.cardContainer}>
            <div className={styles.logoContainer}>
                {/* <img src="https://img.icons8.com/color/48/000000/google-logo.png"/> */}
                <img src="https://img.icons8.com/color/48/000000/microsoft.png" alt="company" />
            </div>
            <div className={styles.leftContainer}>
                <div className={styles.top}>
                    <span className={styles.jobName}>{props.job.jobName}</span>
                    <span className={styles.company}>{props.job.company.companyName}</span>
                </div>
                <div className={styles.bottom}>
                    {
                        props.job.technologies.map((tech,index)=>{
                            return <span key={index} className={styles.badge}>{tech.technologyName}</span>
                        })
                    }
                    {/* // <span className={styles.badge}>Frontend Developer</span>
                    // <span className={styles.badge}>Frontend Developer</span> */}
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.top}>
                    <span className={styles.badge}>{props.job.jobType}</span>
                </div>
                <div className={styles.bottom}>
                    <span className={styles.salary}>$ {props.job.salary}</span>
                    <div className={styles.location}>
                        <span>Krakow, Poland</span>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default JobCard;
