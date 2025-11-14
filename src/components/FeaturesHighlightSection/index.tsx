import Wrapper from "../shared/Wrapper";
import styles from "./index.module.css";
import realFood from "./images/realFood.svg";
import foodPlate from "./images/foodPlate.png";
import premiumIngredient from "./images/premiumIngredient.svg";
import madeFresh from "./images/madeFresh.svg";
import vetDeveloped from "./images/vetDeveloped.svg";
import shield from "./images/shield.svg";
import paypal from './images/paypal.svg'
import visa from './images/visa.svg'
import masterCard from './images/masterCard.svg'
import applePay from './images/applePay.svg'
import googlePay from './images/googlePay.svg'

const FeaturesHighlightSection = () => {
  return (
    <Wrapper>
      <div className={styles.featuresHighlight}>
        <h1>What makes us different makes them stronger</h1>
        <div className={`${styles.sectionPlate} sectionWidth`}>
          <div className={styles.flexColumnBetween}>
            <div className="flexCenter">
              <div>
                <img src={realFood} alt="Real Food" />
              </div>
              <div>
                <div>
                  <p className={`mediumText mediumText-md`}>Real Food</p>
                </div>
                <div className={styles.wholesomeFood}>
                  <p>Wholesome recipes for dogs with real meat and veggies.</p>
                </div>
              </div>
            </div>

            <div className="flexCenter">
              <div>
                <img src={premiumIngredient} alt="Premium Ingredient" />
              </div>
              <div>
                <div>
                  <p className={`mediumText mediumText-md`}>
                    Premium Ingredient
                  </p>
                </div>
                <div className={styles.wholesomeFood}>
                  <p>Elevating pet care with unmatched safety and quality.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.plate}>
            <img src={foodPlate} width={370} height={370} />
          </div>
          <div className={styles.flexColumnBetween}>
            <div className="flexCenter">
              <div>
                <img src={madeFresh} alt="Real Food" />
              </div>
              <div>
                <div>
                  <p className={`mediumText mediumText-md`}>Made Fresh</p>
                </div>
                <div className={styles.wholesomeFood}>
                  <p>
                    We prioritize maintaining the integrity of whole foods and
                    nutrition.
                  </p>
                </div>
              </div>
            </div>

            <div className="flexCenter">
              <div>
                <img src={vetDeveloped} alt="Real Food" />
              </div>
              <div>
                <div>
                  <p className={`mediumText mediumText-md`}>Vet Developed</p>
                </div>
                <div className={styles.wholesomeFood}>
                  <p>
                    We raise the bar for dog nutrition, surpassing industry
                    expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gap16}>
          <div className={styles.button}>
            <button>Get your dog's healthy meal today!</button>
          </div>
          <div className={`${styles.button} gap-`}>
            <div className={`${styles.gap24}`}>
              <div className={`flexCenter ${styles.gap8}`}>
                <img src={shield} />
                <p>30-day money back guarantee</p>
              </div>
              <div>
                <img src={paypal} alt="paypal logo" width={39.2} height={24} />
                <img src={visa} alt="visa logo"  width={39.2} height={24} />
                <img src={masterCard} alt="master card logo"  width={39.2} height={24} />
                <img src={applePay} alt="apple pay logo"  width={39.2} height={24} />
                <img src={googlePay} alt="google logo"  width={39.2} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FeaturesHighlightSection;
