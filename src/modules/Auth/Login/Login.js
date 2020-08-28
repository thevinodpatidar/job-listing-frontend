import React, { Component } from 'react';
import styles from "./Login.module.scss";
import { Link } from 'react-router-dom';

class Login extends Component {

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
      <div className={styles.loginContainer}>
        <div className={styles.topContainer}>
          <span className={styles.heading}>Welcome back,</span>
          <span className={styles.alreadyAccount}>Don't have an account? <Link to="/signup" className={styles.signupLink}>Sign up now</Link></span>
        </div>
        <div className={styles.fields}>
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
          <div className={styles.loginButton}>
            <button type="submit" >Login</button>
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

export default Login;
