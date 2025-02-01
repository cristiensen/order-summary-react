import styles from './SummaryHero.module.css'

function SummaryHero() {
    return (
        <>
            <img className={`${styles.heroImage}`} src="../../images/illustration-hero.svg" alt="Hero Image" />
        </>
    )
}

export default SummaryHero;