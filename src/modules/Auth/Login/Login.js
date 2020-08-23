import React, { Component } from 'react';
import styles from "./Login.module.scss";

class LoginPage extends Component {
  render() {
    console.log(this.props);
    return (
    <form>
      <div className={styles.loginContainer}>
        <div className={styles.topContainer}>
          <span className={styles.heading}>Create an account</span>
          <span className={styles.alreadyAccount}>Already have an account? Log in now</span>
        </div>
        <div className={styles.fields}>
          <div className={styles.field}>
            <label>Email:</label>
            <input type="email" required></input>
          </div>
          <div className={styles.field}>
            <label>Password:</label>
            <input type="password" required></input>
          </div>
          <div className={styles.showPassword}>
            <input type="checkbox"></input>
            <span className={styles.password}>Show Password</span>
          </div>
          <div className={styles.loginButton}>
            <button type="submit" >Login</button>
          </div>
        </div>
        <div className={styles.break}>
          <span>or go with</span>
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

export default LoginPage;
