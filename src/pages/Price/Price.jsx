import React from "react";
import { useTranslation } from "react-i18next";

import "./Price.scss";
import { motion } from "framer-motion";
import { animPage } from "../../helpers/animPage";

export default function Price() {
  const { t } = useTranslation();

  return (
    <motion.section {...animPage} className="container price">
      <h1 className="price__title">{t("Price.title")}</h1>
      <p
        className="price__text"
        dangerouslySetInnerHTML={{ __html: t("Price.text") }}
      />
      <div className="table-wrapper">
        <div className="table table--parcel">
          <h3 className="table__title">{t("Price.Table.parcel.title")}</h3>
          {t("Price.Table.parcel.list", { returnObjects: true }).map(
            (currItem, i) => (
              <TableItem item={currItem} key={i} />
            )
          )}
        </div>
        <div className="table table--pallet">
          <h3 className="table__title">{t("Price.Table.pallet.title")}</h3>
          {t("Price.Table.pallet.list", { returnObjects: true }).map(
            (currItem, i) => (
              <TableItem item={currItem} key={i} />
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}

const TableItem = ({ item }) => (
  <div className="table-item">
    <span className="table-item__text small-text">{item.text}</span>
    <span className="table-item__price-text small-text">
      <strong>{item.priceText}</strong>
    </span>
  </div>
);
