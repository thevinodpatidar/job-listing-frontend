import React, { Component } from 'react'
import styles from "./Dropdown.module.scss";

export class Dropdown extends Component {
    constructor(props){
        super(props)
        this.state = {
          listOpen: false,
          headerTitle: this.props.title
        }
      }

    handleClickOutside(){
    this.setState({
        listOpen: false
    })
    }
    toggleList(){
    this.setState(prevState => ({
        listOpen: !prevState.listOpen
    }))
    }
    changeHeaderTitle(title){
        this.setState({
            headerTitle : title
        })
    }

    render() {
        const{list} = this.props
        const{listOpen, headerTitle} = this.state

        return (
            <div className={styles.dropdownWrapper}>
                <div className={styles.dropdownHeader} onClick={()=> this.toggleList()}>
                    <div className={styles.dropdownHeaderTitle}>{headerTitle}</div>
                    {listOpen
                    ? <img src="https://img.icons8.com/material-sharp/24/000000/up.png"/>
                    : <img src="https://img.icons8.com/material-two-tone/24/000000/down--v2.png"/>
                    }
                </div>
                {listOpen && <ul className={styles.dropdownList}>
                    {list.map((item) => (
                        <li className={styles.dropdownListItem} key={item.id} onClick={() => {
                            this.props.toggleItem(item.id,item.selected=true);
                            this.changeHeaderTitle(item.title);
                            this.toggleList();
                        }} >{item.title}</li>
                        ))}
                    </ul>}
            </div>
        )
    }
}

export default Dropdown
