import styles from './styles.module.scss'

export default function Input({type, label, placeholder, }) {
    return (
        <label className={styles.label}>
            {label}
            <input type={type} placeholder={placeholder}/>
        </label>
    )
}