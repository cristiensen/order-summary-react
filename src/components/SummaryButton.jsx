import styles from './SummaryButton.module.css'

export default function ({ buttonText, isPrimary }) {
    return (
        <button className={`${styles.summaryButton} ${isPrimary ? styles.primaryButton : styles.secondaryButton}`}>{buttonText}</button>
    )
}