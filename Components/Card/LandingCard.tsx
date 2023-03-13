import { motion } from "framer-motion";

type LandingCardProps = {
  text: string;
  title: string;
  icon: any;
};

export default function LandingCard(props: LandingCardProps) {
  return (
    <motion.div
    style={{width: '30%', margin: '1%', height: '20rem'}}
      className="bg-white bg-opacity-10 shadow-md rounded-xl backdrop-filter backdrop-blur-md w-1/4 xl:w-1/6  flex flex-col p-4 py-10 my-8 justify-center items-start"
      whileHover={{
        scale: 1.1,
        animation: "ease-in-out",
      }}
    >
      {props.icon}
      <span className="text-transparent text-3xl font-bold my-2  bg-gradient-to-r from-teal-400 via-green-400 to-green-500 bg-clip-text">
        {props.title}
      </span>

      <span className="text-white text-lg">{props.text}</span>
    </motion.div>
  );
}
