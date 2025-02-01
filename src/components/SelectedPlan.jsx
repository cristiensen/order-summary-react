import styles from './SelectedPlan.module.css'
import musicIcon from '../../public/icon-music.svg'

function SelectedPlan() {
    return (
        <div className={styles.selectedPlan}>
            <div className={styles.planPreview}>
                <img src={musicIcon} alt="Music image" />
                <div className={styles.planType}><p className={styles.planTypeText}>Annual Plan</p><p className={styles.price}>$59.99/year</p></div>
            </div>
            <button class={styles.changeButton}>Change</button>
        </div>
    )
}

export default SelectedPlan