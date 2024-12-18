import React from "react";

import "./About.scss";
import { motion } from "framer-motion";
import { animPage } from "../../helpers/animPage";
import { useTranslation } from "react-i18next";
import Support from "../../components/Support/Support";

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.section {...animPage} className="about container">
      <h1 className="about__title">{t("About.title")}</h1>
      <div className="wrapper">
        <h2>{t("About.subtitle")} </h2>
        <p dangerouslySetInnerHTML={{ __html: t("About.text") }} />
      </div>
      <Support/>
    </motion.section>
  );
}
