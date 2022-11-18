import React, {Component} from "react"
import styles from "../styles/HomePageStudentStyles.module.css"

const courses = ["Mathematics III","C Programming","Asynchronous and DC Machines",
"Semiconductor Devices","Circuit Theory","Electrical Eng Lab I","Literature In Eng"]

const status = ["Pending","Confirmed","Cancelled"]
const days = ["Mon","Tue","Wed","Thur","Fri"]

function CardView({name}){
    return(
        <div  onClick={()=>alert("Hello " + name)} className={styles.CardView}>
            <div className={styles.course}>
                {name}
            </div>
            <div className={styles.statusArea}>
                <div>
                <p className={styles.status}> Status: </p>
                </div>

                <div className={styles.cancelled}>
                <p> CANCELLED</p>
                </div>
            </div>
            <div className={styles.timeArea}>
            <p className={styles.time}> Time</p>
            </div>
        </div>
    )
}

class HomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={styles.body}>
               <div className={styles.fixedbar}>
               {days.map((day)=>
               <div className={styles.daybar}>
               <ul className={styles.list}>
                <li className={styles.day}> {day}</li>
                <div className={styles.bottombar}></div>
               </ul>
               </div>
               )}
               </div>
               
               <div className={styles.homeview}>
               
                <div className={styles.header}>
                <p className={styles.headertxt}> ELECTRICAL 2</p>
                </div>

               <div className={styles.courseview}>
               <button onClick={this.props.changeValue}> Back</button>
                {courses.map(course =>
                    <CardView name={course}/>)}
               </div>

               </div>
            </div>
        )
    }
}

export default HomePage