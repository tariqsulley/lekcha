import React,{Component} from "react"
import styles from "../styles/Homepage.module.css"

class Homepage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={styles.main}>
                <div className={styles.header}>
                    Lekcha
                </div>

                <div className={styles.card}>
                <p className={styles.welc}> Welcome To The Lekcha App </p>
                <p className={styles.subtxt}> I am a:</p>
                
                <div className={styles.btnarea}>
                <button className={styles.button}> Student</button>
                <button className={styles.button}> Lecturer</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Homepage