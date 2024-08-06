import React from 'react'

import "./Contact.scss";
import { motion } from "framer-motion";
import { animPage } from "../../helpers/animPage";

export default function Contact() {
  return (
    <motion.section {...animPage} className="container container">
      <div className="contact__title">
        <h1>Contact us</h1>
        <span className="light">Always by your side, ready to answer any question</span>
      </div>
    </motion.section>
  )
}
