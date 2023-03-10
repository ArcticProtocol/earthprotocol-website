import { motion } from "framer-motion";

type NavBarItemPorps = {
  text: string;
  onClick?: () => void;
};

export default function NavBarItem(props: NavBarItemPorps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        color: "black",
        transition: { duration: 0.1 },
      }}
      onClick={props.onClick}
      className="text-white font-semibold text-xl mr-4 ml-4 cursor-pointer"
    >
      {props.text}
    </motion.div>
  );
}
