import Wrapper from "../shared/Wrapper"
import styles from '../GutHealthBenefitsSection/index.module.css';
import dogFood from './images/dogFood.png'

const PrebioticsInfoSectiones = () => {
    return <Wrapper style={{paddingTop: 0}}>
      <div className="sectionWidth">
        <div className={styles.flexSection}>
            <div className={styles.flexColumn}>
            <h2>
              Improve overall gastrointestinal health for better nutrient
              absorption
            </h2>
            <p>
              Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat the health challenges prevalent in dogs. A
              staggering 91% of our customers have reported significant
              improvements in their dogs' health after incorporating our product
              into their diet.
            </p>
          </div>
          <div>
            <img src={dogFood} alt="2 dogs eating" width={570} height={480} />
          </div>
        </div>
      </div>
    </Wrapper>
}

export default PrebioticsInfoSectiones