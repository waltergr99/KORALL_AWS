import React from 'react'
import styles from "../styles/forgot.module.css";
import { useNavigate , NavLink } from "react-router-dom";


function Forgot() {
    return (
        <div className={styles["container"]}>
        <form className={styles.form}>
          <h2 className={styles.title}>Recover password</h2>
          <p className={styles.subtitle}>sign up your account</p>

          <div className={styles.inputContenedor}>
            <div className={styles.label}>Email</div>
            <input className={styles.input} type="text" />
           </div>
           <div className={styles.inputContenedor}>
            <div className={styles.label}>Password</div>
            <input className={styles.input} type="password" />
           </div>

           <div className={styles.forgotContenedor}>
            <NavLink to="/forgot" className={styles.forgot}>Forgot your password?</NavLink>
           </div>
          
          <button className={styles.button}>Sin up</button>
          <NavLink to="/createuser" >
             <button className={styles.btnRegister}>Register new account</button>
          </NavLink>
        </form>
      </div>
    )
}

export default Forgot
