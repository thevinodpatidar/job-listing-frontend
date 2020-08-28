import React, { useState } from 'react'
import styles from "./JobFilter.module.scss";
import Dropdown from '../../shared/Dropdown/Dropdown';

const categories = [
    {
        id: 0,
        title: 'New York',
        selected: false,
        key: 'location'
    },
    {
      id: 1,
      title: 'Dublin',
      selected: false,
      key: 'location'
    },
    {
      id: 2,
      title: 'California',
      selected: false,
      key: 'location'
    },
    {
      id: 3,
      title: 'Istanbul',
      selected: false,
      key: 'location'
    }
]
// const toggleSelected = (id, key)=>{
//     let temp = this.state[key]
//     temp[id].selected = !temp[id].selected
//     this.setState({
//       [key]: temp
//     })
//   }

export default function JobFilter() {
    const [title,setTitle] = useState("Select Category");
    const [category,setCategory] = useState("");

    const toggleSelected = (id,selected)=>{
        let temp = categories[id];
        console.log(temp,selected);
        setCategory(temp["title"]);
    }

    return (
        <div className={styles.filterSectionWrapper}>
            <div className={styles.categoryContainer}>
                <h3>Job Category</h3>
                <Dropdown title={title} list={categories} toggleItem={toggleSelected}/>
            </div>
            <div className={styles.locationContainer}>
                
            </div>
            <div className={styles.typeContainer}>
                <h3>Job Type</h3>
                <div className={styles.typeWrapper}>
                    <ul className={styles.types}>
                        <li className={styles.type}>
                            <span>Full Time</span>
                            <input type="checkbox" />
                        </li>
                        <li className={styles.type}>
                            <span>Part Time</span>
                            <input type="checkbox" />
                        </li>
                        <li className={styles.type}>
                            <span>Internship</span>
                            <input type="checkbox" />
                        </li>
                        <li className={styles.type}>
                            <span>Contract</span>
                            <input type="checkbox" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.salaryContainer}>
                <h3>Salary</h3>
                <div className={styles.salaryWrapper}>
                    <ul className={styles.salaries}>
                        <li className={styles.salary}>
                            <span>0-2000</span>
                            <input type="checkbox" />
                        </li>
                        <li className={styles.salary}>
                            <span>2000-5000</span>
                            <input type="checkbox" />
                        </li>
                        <li className={styles.salary}>
                            <span>5000-8000</span>
                            <input type="checkbox" />
                        </li>
                        <li className={styles.salary}>
                            <span>8000-10000</span>
                            <input type="checkbox" />
                        </li>
                        <li className={styles.salary}>
                            <span>10000+</span>
                            <input type="checkbox" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
