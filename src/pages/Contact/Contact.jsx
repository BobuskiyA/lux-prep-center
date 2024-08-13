import { useState } from "react";
import { useForm } from "@mantine/form"; // Adjust the import path according to your setup

import "./Contact.scss";
import { motion } from "framer-motion";
import { animPage } from "../../helpers/animPage";

import { sendMessage } from "../../requests/telegram";

export default function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
    },

    // Validation functions for form fields
    validate: {
      name: (value) => (value ? null : "Name is required"),
      // Add more validations as needed
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ name }) => {
    try {
      setIsLoading(true);

      const message = `Імʼя: ${name}`;
      await sendMessage(message);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section {...animPage} className="container container">
      <div className="contact__title">
        <h1>Contact us</h1>
        <span className="light">
          Always by your side, ready to answer any question
        </span>
      </div>
      <form className="form" onSubmit={form.onSubmit(handleSubmit)}>
        <input type="text" placeholder="Name" {...form.getInputProps("name")} />
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </motion.section>
  );
}
