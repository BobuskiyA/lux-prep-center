import React from "react";
import { Button } from "../../components/Button/Button";

import "./Home.scss"
import { animPage } from "../../helpers/animPage";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Support from "../../components/Support/Support";

export default function Home() {
  const { t } = useTranslation();

  return (
    <motion.section {...animPage} className="home">
      <div className="home__center">
        <h1>{t("Home.title")}</h1>

        <ul>
          {t("Home.list", { returnObjects: true }).map((currList, i) => (
            <li key={i}>{currList}</li>
          ))}
        </ul>

          <Button href="/contact" color="white" classes="home__button">
            {t("Button Contact")}
          </Button>
      </div>
      <Support/>
    </motion.section>
  );
}
