import styles from "../card/card.module.css"
export function Card(props){
    return(
        <div className={styles.card}>
            {props.children}
        </div>
    )
}