import React, { useState, useEffect } from 'react'
import styles from "./Job.module.scss";
import { useRouteMatch } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';

function Job() {
    const [job,setJob] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const match = useRouteMatch();

    const fetchJob = async()=>{
    //    const res = await fetch(`http://localhost:8000/v1/api/jobs/${match.params.id}`);
       const res = await fetch(`https://api-getjob.herokuapp.com/v1/api/jobs/${match.params["id"]}`);
       const data = await res.json();
       setJob(data.data[0]);
       setIsLoading(false)
    }
    useEffect(() => {
        // setIsLoading(true);
        fetchJob()
    }, [])
    console.log(job);

    if(isLoading || job.length < 0){
        return <Loader />
    }else{
    return (
        <div className={styles.container}>
            <div className={styles.jobContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.detailContainer}>
                         <span>{job["jobName"]}</span>
                         <div className={styles.company}>
                            <img src="https://img.icons8.com/color/48/000000/microsoft.png" alt="company" />
                            <span>{job["company"].companyName}</span> 
                         </div>
                    </div>
                    <div className={styles.secondaryDetails}>
                        <div className={styles.left}>
                            <span className={styles.leftDetail}>$ {job["salary"]}</span>
                            <span className={styles.leftDetail}>2 days ago</span>
                            <span className={styles.leftDetail}>Krakow, RL</span>
                            <span className={styles.leftDetail}>{job["location"]}</span>
                        </div>
                        <div className={styles.right}>
                            <span className={styles.badge}>Frontend</span>
                        </div>
                    </div>
                    <div className={styles.otherDetails}>
                        <div className={styles.detail}>
                            <span className={styles.type}>Type : </span>
                            <span >{job["jobType"]}</span>
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.type}>Workweek : </span>
                            <span >{job["workWeek"]} hours</span>
                        </div>
                        <div className={styles.detail}>
                            <span className={styles.type}>Holiday : </span>
                            <span >-</span>
                        </div>
                    </div>
                </div>
                <div className={styles.mainContainer}>
                    <div className={styles.aboutWork}>
                        <h2>About the Work</h2>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    </div>
                    <div className={styles.requirments}>
                        <h2>Requirments</h2>
                        <ul className={styles.list}>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra vitae congue.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Pretium vulputate sapien nec sagittis aliquam malesuada.</li>
                            <li>Ultrices sagittis orci a scelerisque purus semper eget. Nec nam aliquam sem et tortor consequat id porta.</li>
                        </ul>
                    </div>
                    <div className={styles.technologies}>
                        <h2>Technologies</h2>
                        <div className={styles.tech}>
                            {
                                job["technologies"].map((tech,index)=>(
                                    <div className={styles.technology} key={index}>{tech.technologyName}</div>
                                ))
                            }
                            {/* // <div className={styles.technology}>CSS/SCSS</div>
                            // <div className={styles.technology}>HTML/HTML5</div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.companyContainer}>
                <div className={styles.aboutCompany}>
                    <h2>About the company</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam. In egestas erat imperdiet sed euismod nisi porta lorem.</span>
                </div>
                <div className={styles.otherDetails}>
                    <div className={styles.detail}>
                        <span className={styles.type}>Company Size : </span>
                        <span >{job["company"].companySize}</span>
                    </div>
                    <div className={styles.detail}>
                        <span className={styles.type}>Industry : </span>
                        <span >{job["company"].industries}</span>
                    </div>
                </div>
                <div className={styles.benefitsContainer}>
                    <h2>Benefits</h2>
                    <div className={styles.benefits}>
                        {
                            job["company"].benefits.map((benefit,index)=>(
                            <div className={styles.benefit} key={index}>
                                <img src="https://img.icons8.com/fluent/48/000000/checked.png"/>
                                <span>{benefit.benefit}</span>
                            </div>
                            )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default Job;
