import React from "react";

import "./HowWorks.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { animPage } from "../../helpers/animPage";

const TextList = [
  "1. Receiving Inventory: Accepting shipments from manufacturers, wholesalers, or retailers.",
  "2. Inspection: Checking the received products for damage, defects, or discrepancies against the order specifications.",
  "3. Labeling: Applying necessary labels, including barcodes, FNSKU labels (for Amazon), and any other specific labeling required by the marketplace.",
  "4. Packaging: Repacking products into suitable packaging for shipment to fulfillment centers or directly to customers. This includes poly bagging, bubble wrapping, and boxing items.",
  "5. Kitting and Bundling: Combining multiple items into a single package or kit as required by the seller.",
  "6. Compliance: Ensuring that products meet marketplace guidelines and regulations, such as safety standards and labeling requirements.",
  "7. Inventory Management: Keeping accurate records of inventory levels, stock location, and movements within the prep center.",
  "8. Shipping: Preparing and sending products to fulfillment centers, such as Amazon FBA (Fulfillment by Amazon) warehouses, or directly to customers.",
  "9. Returns Processing: Handling returned items, including inspection, repackaging, and restocking or disposing of unsellable goods.",
  "10. Documentation: Maintaining thorough records of all activities, including receipts, inspections, shipments, and inventory levels, often integrated with marketplace systems.",
];

export default function HowWorks() {
  const { t } = useTranslation();

  return (
    <motion.section {...animPage} className="container how-works">
      <div className="how-works__title">
        <h1>{t("HowWorks.title")}</h1>
        <span className="small-text">{t("HowWorks.subtitle")}</span>
      </div>
      <div className="how-works__list">
        {t("HowWorks.textList", { returnObjects: true }).map((currT, i) => (
          <p key={i}>{currT}</p>
        ))}
      </div>
    </motion.section>
  );
}
