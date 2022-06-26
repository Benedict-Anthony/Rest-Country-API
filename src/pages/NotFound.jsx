import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { FaArrowLeft } from "react-icons/fa";

function NotFound() {
  return (
    <motion.section
      className="notFound"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <Link to={"/"} className="btn">
          {" "}
          <FaArrowLeft /> <span>Back Home</span>
        </Link>
        <h1>Opp! Something Went Wrong</h1>
        <p>Consider checking your spellings</p>
      </div>
    </motion.section>
  );
}

export default NotFound;
