import { useState } from "react";
import { useForm } from "@mantine/form";
import "./Contact.scss";
import { motion } from "framer-motion";
import { animPage } from "../../helpers/animPage";
import { sendMessage } from "../../requests/telegram";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

import formatFormData from "../../requests/formatFormData";
import Support from "../../components/Support/Support";

export default function Contact() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSucces, setIsSucces] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    validate: {
      name: (value) => (value ? null : t("Contact.form.nameError")),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : t("Contact.form.emailError"),
    },
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setIsLoading(true);
      const formattedData = formatFormData(values);
      await sendMessage(formattedData);
      if (values.file) {
        await sendFile(values.file);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
      setIsSucces(true);
    }
  };

  return (
    <motion.section {...animPage} className="container contact">
      <div className="contact__title">
        <h1>{t("Contact.title")}</h1>
        <span className="light">
        {t("Contact.subtitle")}
        </span>
      </div>
      <div className="wrapper">
        <form
          className={classNames("form", {
            "form--loading": isLoading,
          })}
          onSubmit={form.onSubmit(handleSubmit)}
        >
          {!isSucces ? (
            <>
              <div className="form-input__wrapper">
                <label className="bold" htmlFor="name">
                  {t("Contact.form.labels.nameTitle")}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John"
                  {...form.getInputProps("name")}
                  className="form-input"
                />
                {form.errors.name && (
                  <div className="form__error small-text">
                    {form.errors.name}
                  </div>
                )}
              </div>

              <div className="form-input__wrapper">
                <label className="bold" htmlFor="email">
                  {t("Contact.form.labels.emailTitle")}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  {...form.getInputProps("email")}
                  className="form-input"
                />
                {form.errors.email && (
                  <div className="form__error small-text">
                    {form.errors.email}
                  </div>
                )}
              </div>

              <div className="form-input__wrapper">
                <label className="bold" htmlFor="subject">
                  {t("Contact.form.labels.subjectTitle")}
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  {...form.getInputProps("subject")}
                  className="form-input"
                />
              </div>

              <div className="form-input__wrapper">
                <label className="bold" htmlFor="message">
                  {t("Contact.form.labels.messageTitle")}
                </label>
                <textarea
                  id="message"
                  placeholder={t("Contact.form.labels.messagePlaceholder")}
                  {...form.getInputProps("message")}
                  className="form-input form-input__textarea"
                />
              </div>

              <span className="bold">{t("Contact.form.requiredText")}</span>
              <button
                className="form-button bold button button--black"
                type="submit"
              >
                {isLoading ? "..." : t("Contact.form.buttonText")}
              </button>
            </>
          ) : (
            <div className="form__succes">
              <p
                dangerouslySetInnerHTML={{
                  __html: t("Contact.form.succesText"),
                }}
              />
            </div>
          )}
        </form>
        <div className="adress">
          <h2>{t("Contact.adressTitle")}</h2>
          <a href="" className="adress__link">
            36 Combe Avenue
            <br />
            Portishead
            <br />
            Bristol
            <br />
            BS20 6JS
          </a>
          <a href="https://wa.me/447503490127">+447503490127</a>
        </div>
      </div>
      <Support/>
    </motion.section>
  );
}
