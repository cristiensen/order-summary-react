import styles from './CTA.module.css'
import SummaryButton from './SummaryButton'

export default function CTA() {
    return (
        <div className={styles.cta}>
            <SummaryButton buttonText="Proceed to Payment" isPrimary={true} />
            <SummaryButton buttonText="Cancel Order" isPrimary={false} />
        </div>
    )
}