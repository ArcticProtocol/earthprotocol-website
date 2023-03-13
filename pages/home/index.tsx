import NavBar from "../../Components/NavBar/NavBar";
import { motion } from "framer-motion";
import TextField from "../../Components/TextField/TextField";
import Button from "../../Components/Button/Button";
import LandingCard from "../../Components/Card/LandingCard";
import Footer from "../../Components/Footer/Footer";
import {
  ClipboardListIcon,
  GiftIcon,
  Star,
} from "../../Components/Icons/Icons";
import { useRouter } from "next/router";
import {
  Caption,
  Header,
  JubotronMission,
  ListHeader,
} from "./components/content";

import Image from "next/image";

import transportChart from "../../public/dataset/transport-chart.png";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <motion.div
        className="opacity-0 relative"
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Primary Landing Page*/}
        <div
          className="bg-minimalsitic-icon bg-no-repeat bg-center bg-cover"
          style={{ minHeight: "100vh" }}
        >
          <motion.div
            className="flex flex-col xl:flex-row opacity-0"
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >
            <div className="xl:flex-1 flex flex-col justify-center items-center xl:items-start">
              <div className="mx-6 mt-32 xl:mt-40 xl:ml-52">
                <Header />
                <div className="flex flex-col justify-center items-center xl:items-start mt-12 w-full">
                  <Caption />
                  <TextField placeholder="Email" width="w-1/2 " />
                  <Button
                    buttonStyle="w-3/4 xl:w-1/2 bg-white bg-opacity-20 text-white rounded-md h-14 mt-5 font-semibold hover:bg-gradient-to-r from-teal-400 via-green-400 to-green-500 hover:animate-flow"
                    onClick={() => {}}
                    textStyle="text-white font-semibold text-md"
                    text="SIGN UP"
                  />
                </div>
              </div>
            </div>
            <div className="hidden xl:inline xl:flex-1"></div>
          </motion.div>
        </div>

        {/* Mission statement Jumbotron with image*/}

        <div
          className="flex justify-center items-center bg-opacity-10"
          style={{ minHeight: "90vh" }}
        >
          <motion.div
            className="mx-6 xl:w-5/6 xl:h-3/4 shadow-md rounded-xl py-3 px-4 xl:px-6 mt-4 bg-black backdrop-filter backdrop-blur-md bg-opacity-10 flex flex-col items-center opacity-0"
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <JubotronMission />
          </motion.div>
        </div>

        {/* Mission statement Jumbotron with image*/}
        <div
          className="flex justify-center items-center bg-city-bg bg-opacity-10"
          style={{ minHeight: "90vh" }}
        >
          <div className="mx-4 xl:w-5/6 xl:h-5/6 shadow-md rounded-xl py-3 px-4 xl:px-6 mt-4 bg-black backdrop-filter backdrop-blur-md bg-opacity-40 flex flex-col items-center">
          <img src="https://ichef.bbci.co.uk/images/ic/448xn/p09xd6t1.png"></img>
          </div>
        </div>

        <div
          className="flex justify-center items-center bg-opacity-10"
          style={{ minHeight: "90vh" }}
        >
          <motion.div
            className=" mx-4  shadow-md rounded-xl py-3 px-4 xl:px-6 mt-4 bg-black backdrop-filter backdrop-blur-md bg-opacity-10 flex flex-col items-center opacity-0"
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <span className="text-transparent text-3xl font-bold my-2  bg-gradient-to-r from-teal-400 via-green-400 to-green-500 bg-clip-text">
              Meet the solution
            </span>
            <div className="flex justify-center items-center bg-opacity-10">
              <div style={{width: '60%'}}>
                <img src="./netzero-app.png"></img>
              </div>
              <span className="xl:text-xl m-1 xl:mx-56 text-white mt-4 xl:mt-14 text-justify">
                Climate change is already showing signs of being a treat to both our
                planet and civilization. Without taking the right descisions, we are
                endangering future generations. We don't own the planet, we have to make
                efforts to save it. Without the right tools, technology, research, and
                incentive, it would be hard to accomplish the goal of accomplishing
                net-zero emissions in the coming decades.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Cards and goals*/}
        <div
          className="bg-no-repeat bg-center bg-cover flex flex-col xl:flex-row"
          style={{ minHeight: "100vh" }}
        >
          <p>geellooo</p>
          {/* <div className="xl:hidden mb-8">
            <ListHeader />
          </div> */}

          <div className="flex xl:flex-1 flex-wrap justify-center items-center xl:items-end xl:mr-10">
            <LandingCard
              title="Curated Itenary"
              text=" Carefully curated iternary with the best sights and restuarents at your
            vacation so you do not have to be confused about where to head or eat
            next."
              icon={<ClipboardListIcon />}
            />
            <LandingCard
              title="All in one Pass!"
              text="A pre-packaged subscription to cater all your payment needs cashless and without the need to convert currencies."
              icon={<Star />}
            />

            <LandingCard
              title="Guaranteed Rewards"
              text=" Get guaranteed reward in coupons from your favourite brands or cyrpto, everytime you make a green choice while travelling."
              icon={<GiftIcon />}
            />
            <LandingCard
              title="Curated Itenary"
              text=" Carefully curated iternary with the best sights and restuarents at your
            vacation so you do not have to be confused about where to head or eat
            next."
              icon={<ClipboardListIcon />}
            />
            <LandingCard
              title="All in one Pass!"
              text="A pre-packaged subscription to cater all your payment needs cashless and without the need to convert currencies."
              icon={<Star />}
            />

            <LandingCard
              title="Guaranteed Rewards"
              text=" Get guaranteed reward in coupons from your favourite brands or cyrpto, everytime you make a green choice while travelling."
              icon={<GiftIcon />}
            />
          </div>
          {/* <div className="hidden xl:inline mb-5">
            <ListHeader />
          </div> */}
        </div>
        <div
          className="bg-subtitle-bg bg-no-repeat bg-center bg-cover flex flex-col xl:flex-row"
          style={{ minHeight: "100vh" }}
        >
          <ListHeader />
        </div> 
      </motion.div>
    </>
  );
}
