import React,{Component} from "react"
import styles from "../styles/LoginPage.module.css"
import HomePage from "./HomePageStudent"

class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            value: true
        }
        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(){
        this.setState({
            value: !this.state.value
        })
    }

    render(){
        if(this.state.value === true){
        return(
            <div className={styles.main}>
                <div className={styles.header}>
                    Lekcha
                </div>

                <div className={styles.card}>
                <p className={styles.welc}> Welcome To The Lekcha App </p>
                <p className={styles.subtxt}> I am a:</p>
                
                <div className={styles.btnarea}>
                <button className={styles.button} onClick={this.changeValue}> Student</button>
                <button className={styles.button}> Lecturer</button>
                </div>
                </div>
                
                <div className={styles.footer}>

                </div>
            </div>
        )}
        else{
            return(
               <div>
                <HomePage changeValue={this.changeValue} />
               </div>
            )
        }
    }
}

export default LoginPage