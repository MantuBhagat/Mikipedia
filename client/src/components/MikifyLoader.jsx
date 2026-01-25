import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";

const container = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      repeat: Infinity,
    },
  },
};

const letter = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const MikifyLoader = () => {
  const text = "Mikify".split("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <div className="flex flex-col items-center gap-3">
        {/* Optional icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="text-purple-500 text-2xl"
        >
          <HiSparkles />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="flex text-4xl font-bold tracking-wide"
        >
          {text.map((char, index) => (
            <motion.span key={index} variants={letter} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.div>

        <p className="text-sm text-gray-400 tracking-widest">Loading</p>
      </div>
    </div>
  );
};

export default MikifyLoader;
