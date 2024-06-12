//src/app/page.js
import Hero from "@/components/Hero";
import styles from "./page.module.css";
import HomePages from "@/components/HomePages";
import CaseStudies from "@/components/CaseStudies";
import SupportivePages from "@/components/SupportivePages";
import UtilityPages from "@/components/UtilityPages";
import GetStart from "@/components/GetStart";

export default function Home() {
  return (
    <div >
      <Hero />
      <HomePages />
      <div className={styles["wrapper-color"]}>
        <CaseStudies />
      </div>
      <SupportivePages />
      <div className={styles["wrapper-color-black"]}>
        <UtilityPages/>
      </div>
      <GetStart/>
    </div>
  );
}
