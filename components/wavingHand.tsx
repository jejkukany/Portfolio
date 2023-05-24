import { motion } from "framer-motion";

export default function WavingHand() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          animate={{ rotate: 20 }}
          transition={{
            repeat: Infinity,
            from: 0,
            duration: 0.6,
            repeatType: "mirror",
          }}
        >
          👋
        </motion.div>
      </motion.div>
    );
  };