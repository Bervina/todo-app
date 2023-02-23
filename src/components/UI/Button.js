import styles from './Button.module.css'
function Button({type,onClick, children, title, disabled=false}){
    return (<button type={type} className={styles.button} onClick={onClick} title={title} disabled={disabled}>{children}</button>)

}
export default Button