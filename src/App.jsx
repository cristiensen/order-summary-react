import { useState } from 'react'
import styles from './App.module.css'
import './components/SummaryHero'
import SummaryHero from './components/SummaryHero'
import SummaryTitle from './components/SummaryTitle'
import SummaryDescription from './components/SummaryDescription'
import SelectedPlan from './components/SelectedPlan'
import CTA from './components/CTA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <div className={styles.orderSummary}>
        <SummaryHero />
        <div className={styles.container}>
          <SummaryTitle />
          <SummaryDescription />
          <SelectedPlan />
          <CTA />
        </div>
      </div>
    </div>
  )
}

export default App
