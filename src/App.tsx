import styles from "./App.module.css";
import FeaturesHighlightSection from "./components/FeaturesHighlightSection";
import GutHealthBenefitsSection from "./components/GutHealthBenefitsSection";
import NutritionOverviewSection from "./components/NutritionOverviewSection";
import PrebioticsInfoSectiones from "./components/PrebioticsInfoSection";

function App() {
  return (
    <>
      <FeaturesHighlightSection />
      <NutritionOverviewSection />
      <div className={styles.thirdSection}>
        <GutHealthBenefitsSection />
        <PrebioticsInfoSectiones />
      </div>
    </>
  );
}

export default App;
