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
                <p> Welcome To The Lekcha App </p>
                <p> I am a:</p>
                <p> Student Lecturer</p>
                </div>
            </div>
        )
    }
}

export default Homepage