import React, { useState, useEffect } from "react";

import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../Button/Button";
import classNames from "classnames";

import { useTranslation } from "react-i18next";
import useLocalStorage from "../../hooks/use-localstorage";
import i18n from "../../../i18n";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const { t } = useTranslation();
  const [isActiveModal, setIsActive] = useState(false);

  return (
    <header className="header container">
      <Link to="/" className="left">
        <img src="/logo.svg" alt="" className="header__logo" />
        <DropDown />
      </Link>
      <div className="center">
        {t("Header.navigation", { returnObjects: true })?.map((currLink, i) => (
          <NavLink
            to={currLink.slug}
            key={i}
            className={({ isActive }) =>
              classNames({
                "link--active": isActive,
              })
            }
          >
            {currLink.title}
          </NavLink>
        ))}
      </div>
      <div className="right">
        <div className="socials">
          <a href="https://www.instagram.com/luxprepcentre?igsh=MWZkZDB0bHh1bHFq&utm_source=ig_contact_invite" target="_blank" className="socials__link">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0252 3.08331H24.9752C29.9085 3.08331 33.9168 7.09165 33.9168 12.025V24.975C33.9168 27.3465 32.9748 29.6208 31.2979 31.2977C29.621 32.9746 27.3466 33.9166 24.9752 33.9166H12.0252C7.09183 33.9166 3.0835 29.9083 3.0835 24.975V12.025C3.0835 9.6535 4.02556 7.37915 5.70245 5.70227C7.37934 4.02538 9.65369 3.08331 12.0252 3.08331ZM11.7168 6.16665C10.2449 6.16665 8.83321 6.75138 7.79239 7.7922C6.75156 8.83303 6.16683 10.2447 6.16683 11.7166V25.2833C6.16683 28.3512 8.64891 30.8333 11.7168 30.8333H25.2835C26.7554 30.8333 28.1671 30.2486 29.2079 29.2078C30.2488 28.1669 30.8335 26.7553 30.8335 25.2833V11.7166C30.8335 8.64873 28.3514 6.16665 25.2835 6.16665H11.7168ZM26.5939 8.47915C27.105 8.47915 27.5952 8.68218 27.9566 9.04358C28.318 9.40497 28.521 9.89514 28.521 10.4062C28.521 10.9173 28.318 11.4075 27.9566 11.7689C27.5952 12.1303 27.105 12.3333 26.5939 12.3333C26.0828 12.3333 25.5927 12.1303 25.2313 11.7689C24.8699 11.4075 24.6668 10.9173 24.6668 10.4062C24.6668 9.89514 24.8699 9.40497 25.2313 9.04358C25.5927 8.68218 26.0828 8.47915 26.5939 8.47915ZM18.5002 10.7916C20.5445 10.7916 22.5052 11.6038 23.9508 13.0494C25.3964 14.495 26.2085 16.4556 26.2085 18.5C26.2085 20.5444 25.3964 22.505 23.9508 23.9506C22.5052 25.3962 20.5445 26.2083 18.5002 26.2083C16.4558 26.2083 14.4951 25.3962 13.0495 23.9506C11.604 22.505 10.7918 20.5444 10.7918 18.5C10.7918 16.4556 11.604 14.495 13.0495 13.0494C14.4951 11.6038 16.4558 10.7916 18.5002 10.7916ZM18.5002 13.875C17.2735 13.875 16.0971 14.3623 15.2298 15.2296C14.3624 16.097 13.8752 17.2734 13.8752 18.5C13.8752 19.7266 14.3624 20.903 15.2298 21.7703C16.0971 22.6377 17.2735 23.125 18.5002 23.125C19.7268 23.125 20.9032 22.6377 21.7705 21.7703C22.6379 20.903 23.1252 19.7266 23.1252 18.5C23.1252 17.2734 22.6379 16.097 21.7705 15.2296C20.9032 14.3623 19.7268 13.875 18.5002 13.875Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/share/g/19sUsQrZSi/?mibextid=wwXIfr" target="_blank" className="socials__link">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.221 3.08331H4.77933C4.32957 3.08331 3.89822 3.26198 3.58019 3.58001C3.26216 3.89804 3.0835 4.32938 3.0835 4.77915V32.2208C3.0835 32.6706 3.26216 33.1019 3.58019 33.42C3.89822 33.738 4.32957 33.9166 4.77933 33.9166H19.5485V21.9687H15.5402V17.3437H19.5485V13.875C19.4655 13.0606 19.5616 12.2379 19.8302 11.4646C20.0988 10.6914 20.5333 9.9862 21.1032 9.39861C21.6732 8.81103 22.3648 8.35526 23.1295 8.06326C23.8943 7.77127 24.7136 7.65012 25.5302 7.70831C26.7301 7.70093 27.9294 7.7627 29.1222 7.89331V12.0558H26.671C24.7285 12.0558 24.3585 12.9808 24.3585 14.3221V17.2975H28.9835L28.3822 21.9225H24.3585V33.9166H32.221C32.4437 33.9166 32.6642 33.8728 32.87 33.7876C33.0757 33.7023 33.2627 33.5774 33.4201 33.42C33.5776 33.2625 33.7025 33.0755 33.7877 32.8698C33.873 32.664 33.9168 32.4435 33.9168 32.2208V4.77915C33.9168 4.55645 33.873 4.33593 33.7877 4.13018C33.7025 3.92443 33.5776 3.73748 33.4201 3.58001C33.2627 3.42254 33.0757 3.29762 32.87 3.2124C32.6642 3.12718 32.4437 3.08331 32.221 3.08331Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <Button href="/contact" classes="header__button">
          {t("Button Contact")}
        </Button>
      </div>
      <div
        className={classNames("nav", {
          "nav--active": isActiveModal,
        })}
        onClick={() => setIsActive(!isActiveModal)}
      >
        <HeaderButton />
        <AnimatePresence mode="wait">
          {isActiveModal && <NavBody setIsActive={setIsActive} />}
        </AnimatePresence>
      </div>
    </header>
  );
};

const DropDown = () => {
  const [isActive, setIsActive] = useState(false);

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "en");
  const languages = ["en", "ua", "ru"]; // Example languages

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get("lang");

    // Set language based on URL parameter or fallback to localStorage
    if (langParam && languages.includes(langParam.toLowerCase())) {
      if (langParam !== language) {
        setLanguage(langParam);
        i18n.changeLanguage(langParam);
      }
    } else {
      // If URL doesn't have a valid lang param, update it with current language
      updateUrl(language);
    }
  }, []);

  const updateUrl = (lang) => {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("lang", lang);
    const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
  };

  const handleLanguageChange = (selectedLanguage) => {
    if (selectedLanguage !== language) {
      i18n.changeLanguage(selectedLanguage);
      setLanguage(selectedLanguage);
      updateUrl(selectedLanguage);
    }
  };

  return (
    <div className="dropdown extraBold" onClick={() => setIsActive(!isActive)}>
      <div className="dropdown__active">
        <h3>{language}</h3>
        <svg
          className="dropdown__arrow"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33325 5.625L7.99992 9.375L12.6666 5.625"
            stroke="white"
            strokeWidth="0.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            className="dropdown__list"
          >
            {languages.map(
              (currLang, i) =>
                currLang !== language && (
                  <h3
                    onClick={() => handleLanguageChange(currLang.toLowerCase())}
                    key={i}
                  >
                    {currLang}
                  </h3>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HeaderButton = () => {
  return (
    <div className="nav__button">
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="nav__button-icon nav__button-icon--open"
      >
        <path
          d="M3 6.50098H21M3 12.501H21M3 18.501H21"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="nav__button-icon nav__button-icon--close"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.5666 5.06639C20.641 4.992 20.7 4.9037 20.7403 4.80652C20.7805 4.70934 20.8012 4.60518 20.8012 4.49999C20.8012 4.39479 20.7805 4.29063 20.7403 4.19345C20.7 4.09627 20.641 4.00797 20.5666 3.93358C20.4922 3.8592 20.4039 3.8002 20.3068 3.75995C20.2096 3.71969 20.1054 3.69897 20.0002 3.69897C19.895 3.69897 19.7909 3.71969 19.6937 3.75995C19.5965 3.8002 19.5082 3.8592 19.4338 3.93358L12.0002 11.3688L4.56663 3.93358C4.49225 3.8592 4.40395 3.8002 4.30676 3.75995C4.20958 3.71969 4.10542 3.69897 4.00023 3.69897C3.89504 3.69897 3.79088 3.71969 3.6937 3.75995C3.59651 3.8002 3.50821 3.8592 3.43383 3.93358C3.35945 4.00797 3.30045 4.09627 3.26019 4.19345C3.21994 4.29063 3.19922 4.39479 3.19922 4.49999C3.19922 4.60518 3.21994 4.70934 3.26019 4.80652C3.30045 4.9037 3.35945 4.992 3.43383 5.06639L10.869 12.5L3.43383 19.9336C3.28361 20.0838 3.19922 20.2875 3.19922 20.5C3.19922 20.7124 3.28361 20.9162 3.43383 21.0664C3.58405 21.2166 3.78779 21.301 4.00023 21.301C4.21267 21.301 4.41641 21.2166 4.56663 21.0664L12.0002 13.6312L19.4338 21.0664C19.584 21.2166 19.7878 21.301 20.0002 21.301C20.2127 21.301 20.4164 21.2166 20.5666 21.0664C20.7168 20.9162 20.8012 20.7124 20.8012 20.5C20.8012 20.2875 20.7168 20.0838 20.5666 19.9336L13.1314 12.5L20.5666 5.06639Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

const NavBody = ({ setIsActive }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="nav-body container"
      initial={{ clipPath: "inset(0% 0% 100%)" }}
      animate={{ clipPath: "inset(0% 0% 0%)" }}
      exit={{ clipPath: "inset(0% 0% 100%)" }}
      transition={{ duration: .5  }}
    >
      <div className="nav-list">
        {t("Header.navigation", { returnObjects: true })?.map((currLink, i) => (
          <NavLink
            to={currLink.slug}
            key={i}
            className={({ isActive }) =>
              classNames({
                "link--active": isActive,
              })
            }
            onClick={() => setIsActive(false)}
          >
            <h2>{currLink.title}</h2>
          </NavLink>
        ))}
      </div>
      <div className="socials">
        <Button href="/contact" classes="header__button">
          {t("Button Contact")}
        </Button>

        <div className="socials-wrapper">
          <a href="" target="_blank" className="socials__link">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0252 3.08331H24.9752C29.9085 3.08331 33.9168 7.09165 33.9168 12.025V24.975C33.9168 27.3465 32.9748 29.6208 31.2979 31.2977C29.621 32.9746 27.3466 33.9166 24.9752 33.9166H12.0252C7.09183 33.9166 3.0835 29.9083 3.0835 24.975V12.025C3.0835 9.6535 4.02556 7.37915 5.70245 5.70227C7.37934 4.02538 9.65369 3.08331 12.0252 3.08331ZM11.7168 6.16665C10.2449 6.16665 8.83321 6.75138 7.79239 7.7922C6.75156 8.83303 6.16683 10.2447 6.16683 11.7166V25.2833C6.16683 28.3512 8.64891 30.8333 11.7168 30.8333H25.2835C26.7554 30.8333 28.1671 30.2486 29.2079 29.2078C30.2488 28.1669 30.8335 26.7553 30.8335 25.2833V11.7166C30.8335 8.64873 28.3514 6.16665 25.2835 6.16665H11.7168ZM26.5939 8.47915C27.105 8.47915 27.5952 8.68218 27.9566 9.04358C28.318 9.40497 28.521 9.89514 28.521 10.4062C28.521 10.9173 28.318 11.4075 27.9566 11.7689C27.5952 12.1303 27.105 12.3333 26.5939 12.3333C26.0828 12.3333 25.5927 12.1303 25.2313 11.7689C24.8699 11.4075 24.6668 10.9173 24.6668 10.4062C24.6668 9.89514 24.8699 9.40497 25.2313 9.04358C25.5927 8.68218 26.0828 8.47915 26.5939 8.47915ZM18.5002 10.7916C20.5445 10.7916 22.5052 11.6038 23.9508 13.0494C25.3964 14.495 26.2085 16.4556 26.2085 18.5C26.2085 20.5444 25.3964 22.505 23.9508 23.9506C22.5052 25.3962 20.5445 26.2083 18.5002 26.2083C16.4558 26.2083 14.4951 25.3962 13.0495 23.9506C11.604 22.505 10.7918 20.5444 10.7918 18.5C10.7918 16.4556 11.604 14.495 13.0495 13.0494C14.4951 11.6038 16.4558 10.7916 18.5002 10.7916ZM18.5002 13.875C17.2735 13.875 16.0971 14.3623 15.2298 15.2296C14.3624 16.097 13.8752 17.2734 13.8752 18.5C13.8752 19.7266 14.3624 20.903 15.2298 21.7703C16.0971 22.6377 17.2735 23.125 18.5002 23.125C19.7268 23.125 20.9032 22.6377 21.7705 21.7703C22.6379 20.903 23.1252 19.7266 23.1252 18.5C23.1252 17.2734 22.6379 16.097 21.7705 15.2296C20.9032 14.3623 19.7268 13.875 18.5002 13.875Z"
                fill="black"
              />
            </svg>
          </a>
          <a href="" target="_blank" className="socials__link">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.221 3.08331H4.77933C4.32957 3.08331 3.89822 3.26198 3.58019 3.58001C3.26216 3.89804 3.0835 4.32938 3.0835 4.77915V32.2208C3.0835 32.6706 3.26216 33.1019 3.58019 33.42C3.89822 33.738 4.32957 33.9166 4.77933 33.9166H19.5485V21.9687H15.5402V17.3437H19.5485V13.875C19.4655 13.0606 19.5616 12.2379 19.8302 11.4646C20.0988 10.6914 20.5333 9.9862 21.1032 9.39861C21.6732 8.81103 22.3648 8.35526 23.1295 8.06326C23.8943 7.77127 24.7136 7.65012 25.5302 7.70831C26.7301 7.70093 27.9294 7.7627 29.1222 7.89331V12.0558H26.671C24.7285 12.0558 24.3585 12.9808 24.3585 14.3221V17.2975H28.9835L28.3822 21.9225H24.3585V33.9166H32.221C32.4437 33.9166 32.6642 33.8728 32.87 33.7876C33.0757 33.7023 33.2627 33.5774 33.4201 33.42C33.5776 33.2625 33.7025 33.0755 33.7877 32.8698C33.873 32.664 33.9168 32.4435 33.9168 32.2208V4.77915C33.9168 4.55645 33.873 4.33593 33.7877 4.13018C33.7025 3.92443 33.5776 3.73748 33.4201 3.58001C33.2627 3.42254 33.0757 3.29762 32.87 3.2124C32.6642 3.12718 32.4437 3.08331 32.221 3.08331Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
