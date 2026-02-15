import { motion } from "framer-motion";

export default function Card({ className = "", children }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={`glass rounded-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
