import React from "react";

import "./About.scss"
import { motion } from "framer-motion";
import { animPage } from "../../helpers/animPage";

export default function About() {
  return (
    <motion.section {...animPage} className="about container">
      <h1 className="about__title">About us</h1>
      <div className="wrapper">
        <h2>
          Empowering E-commerce: Tailored Fulfillment Solutions for Every Stage
        </h2>
        <p>
          We began as a small online business, giving us unique insights into
          your needs. From our experience in e-commerce, we recognized a gap in
          the B2B market for quality fulfillment services across online
          distribution channels. Our first major breakthrough came when we
          utilized high-quality 3PL services.
          <br />
          <br />
          This is why our services are tailored for online commerce businesses
          at various stages. Whether you are a newcomer or have significant
          experience and inventory, our offerings are designed to meet the needs
          of all retailers, optimized for cost-effectiveness and efficiency.
          <br />
          <br />
          A Lux Prep center for marketplaces primarily focuses on preparing
          products for sale on various online platforms, such as Amazon, eBay,
          Etsy, and others.These services enable sellers to streamline their
          operations, maintain compliance with marketplace requirements, and
          focus on other aspects of their business, such as marketing and
          customer service.
          <br />
          <br />
        </p>
      </div>
    </motion.section>
  );
}
