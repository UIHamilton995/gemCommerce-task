import Wrapper from "../shared/Wrapper";
import styles from "./index.module.css";
import dogEat from "./images/dogEat.png";

const NutritionOverviewSection = () => {
  return (
    <Wrapper className="bg-oldSection">
      <div className="sectionWidth">
        <div className={styles.flexSection}>
          <div className={styles.flexVerticalSection}>
            <div>
              <h2>
                Nutrition is the foundation for longer, healthier lives in dogs.
              </h2>
              <p>
                Invest in your dog's future with our scientifically formulated
                superfood-powered supplements. Give them the nutrition they
                deserve and watch them thrive with vitality, energy, and the joy
                of a longer, healthier life.
              </p>
            </div>
            <div>
              <div className={styles.keypoints}>
                <p className="mediumText mediumText-md">Key Points:</p>
                <div className={styles.indexedMetric}>
                  <div className={styles.point}>
                    <div>97%</div>
                    <div>
                      <p>
                        Dogs choose our dog food over leading brands because of
                        its real functional ingredients and delicious flavor.
                      </p>
                    </div>
                  </div>
                  <div className={styles.point}>
                    <div>84%</div>
                    <div>
                      <p>
                        Our dog food provides superior nutrition and a patented
                        probiotic for optimal nutrient absorption.
                      </p>
                    </div>
                  </div>
                  <div className={styles.point}>
                    <div>92%</div>
                    <div>
                      <p>
                        Our dog food's high protein and fat digestibility
                        contribute to ideal stool quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.button}>
                Give your furry friend the gift of wholesome nutrition
              </button>
            </div>
          </div>
          <div className={styles.dogRest}>
            <img src={dogEat} width={570} height={610} alt="dog relaxing" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NutritionOverviewSection;
