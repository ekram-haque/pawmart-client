// LoadingSkeleton.js
import React from "react";
import { motion } from "framer-motion";

const LoadingSkeleton = ({ count = 5, className }) => {
  return (
    <div className={`flex flex-col gap-3 ${className || ""}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="w-full h-12 bg-gray-300 dark:bg-gray-700 rounded-lg"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 0.8 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
