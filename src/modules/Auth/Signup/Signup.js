import React, { Component } from 'react';
import styles from "./Signup.module.scss";
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
          checked : false
        }
      }
    togglePassword (event){
    this.setState({checked : !this.state.checked})
    }

  render() {
    console.log(this.props);
    return (
    <form>
      <div className={styles.signupContainer}>
        <div className={styles.topContainer}>
          <span className={styles.heading}>Create an account</span>
          <span className={styles.alreadyAccount}>Already have an account?<Link to="/login" className={styles.loginLink} > Log in now</Link></span>
        </div>
        <div className={styles.fields}>
          <div className={styles.field}>
            <label>Username:</label>
            <input type="text" required></input>
          </div>
          <div className={styles.field}>
            <label>Email:</label>
            <input type="email" required></input>
          </div>
          <div className={styles.field}>
            <label>Password:</label>
            <input type={this.state.checked ? 'text' : 'password'} required></input>
          </div>
          <div className={styles.showPassword}>
            <input type="checkbox" onChange={(e)=> this.togglePassword(e)}></input>
            <span className={styles.password}>Show Password</span>
          </div>
          <div className={styles.signupButton}>
            <button type="submit" >Signup</button>
          </div>
        </div>
        <div className={styles.break}>
          <span>or</span>
        </div>
        <div className={styles.socialLogin} >
          <div className={styles.google}>
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google"/>
          </div>
          <div className={styles.facebook}>
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" />
          </div>
        </div>
      </div>
    </form>
    );
  }
}

export default Signup;
