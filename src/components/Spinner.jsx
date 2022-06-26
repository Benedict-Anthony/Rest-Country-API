import React from "react";
import { motion } from "framer-motion";
import spinner from "../spinner.gif";

function Spinner() {
  return (
    <motion.section
      className="spinner"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4 }}
    >
      <img src={spinner} alt="Loading" />
    </motion.section>
  );
}

export default Spinner;
