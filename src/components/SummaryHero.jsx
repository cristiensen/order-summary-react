import styles from './SummaryHero.module.css'
import headerImage from '../../public/illustration-hero.svg'

function SummaryHero() {
    return (
        <>
            <img className={`${styles.heroImage}`} src={headerImage} alt="Hero Image" />
        </>
    )
}

export default SummaryHero;