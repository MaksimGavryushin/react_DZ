import { useState } from "react"
import styles from "./Message.module.css"

export function Message(props) {
    
    //const [name, setName] = useState("привет")
    
    return (
        <h1 className= {styles.myMessage}>Я говорю: {props.name}</h1>
    )
}

export default Message