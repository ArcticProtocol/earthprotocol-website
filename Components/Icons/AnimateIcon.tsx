import { motion } from "framer-motion";

type AnimateIconProps = {
  children: any;
};

export default function AnimateIcon(props: AnimateIconProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileTap={{
        scale: 0.7,
      }}
    >
      {props.children}
    </motion.div>
  );
}
