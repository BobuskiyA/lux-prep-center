import React from "react";
import { Button } from "../../components/Button/Button";

import "./Home.scss"
import { animPage } from "../../helpers/animPage";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section {...animPage} className="home">
      <div className="home__center">
        <h1>PREP CENTER FOR UK AMAZON SELLERS</h1>

        <ul>
          <li>Focused on Private Label</li>
          <li>Specialized Private Label FBA Services</li>
          <li>Handling Amazon UK Returns/Removals</li>
          <li>Storage Solutions</li>
          <li>Customized Services for Specific Needs</li>
        </ul>

          <Button href="/contact" color="white" classes="home__button">
            Contact us
          </Button>
      </div>
    </motion.section>
  );
}
