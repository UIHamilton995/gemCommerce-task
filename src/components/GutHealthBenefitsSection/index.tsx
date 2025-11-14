import Wrapper from "../shared/Wrapper";
import dogEat from "./images/dogEating.png";
import styles from "./index.module.css";

const GutHealthBenefitsSection = () => {
  return (
    <Wrapper  style={{paddingBottom: 0}}>
      <div className="sectionWidth">
        <div className={`${styles.flexSection} ${styles.otherClass}`}>
          <div>
            <img src={dogEat} alt="2 dogs eating" width={570} height={480} />
          </div>
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
        </div>
      </div>
    </Wrapper>
  );
};

export default GutHealthBenefitsSection;
