import { motion } from 'framer-motion';

const text = "tran quang vinh.";
const letters = text.split("");

export default function Preview() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-5xl font-light"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: i * 0.08, duration: 0.6 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
