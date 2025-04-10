import { motion, AnimatePresence } from "framer-motion";

const AnimatedError = ({ msg, centered = false, variant = "default" }) => {
  const isLogin = variant === "login";
  const isForgotPassword = variant === "forgotPassword";
  const containerClass = isLogin
    ? "left-[-1/2]"
    : isForgotPassword
      ? "left-[-1/2]"
      : centered
        ? "left-1/2 -translate-x-1/2"
        : "left-0";

  const triangleClass = isLogin
    ? "left-6"
    : isForgotPassword
      ? "left-[30%] -translate-x-1/2"
      : centered
        ? "left-[25%] -translate-x-1/2"
        : "left-4";

  return (
    <AnimatePresence>
      {msg && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.25 }}
          className={`absolute ${containerClass} mt-1 bg-red-100 text-red-700 text-sm w-[260px] px-3 py-2 rounded-lg shadow-md z-10`}
        >
          {msg}
          <div
            className={`absolute top-0 ${triangleClass} w-3 h-3 bg-red-100 rotate-45 -translate-y-1/2`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedError;
