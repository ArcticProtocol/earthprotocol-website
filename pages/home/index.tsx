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

export default function Home() {
  const router = useRouter();
  return (
    <>
      <motion.div
        className="opacity-0"
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          className="bg-minimalsitic-icon bg-no-repeat bg-center bg-cover"
          style={{ minHeight: "100vh" }}
        >
          <NavBar />
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

                  <TextField placeholder="Email" width="w-1/2 "  />

                  <Button
                    buttonStyle="w-3/4 xl:w-1/2 bg-white bg-opacity-20 text-white rounded-md h-14 mt-5 font-semibold hover:bg-gradient-to-r from-teal-400 via-green-400 to-green-500 hover:animate-flow"
                    onClick={() => {
                      router.push("/scan");
                    }}
                    textStyle="text-white font-semibold text-md"
                    text="SIGN UP"
                  />
                </div>
              </div>
            </div>
            <div className="hidden xl:inline xl:flex-1"></div>
          </motion.div>
        </div>

        <div
          className="bg-black flex justify-center items-center"
          style={{ minHeight: "80vh" }}
        >
          <motion.div
            className=" mx-4 xl:w-3/4 xl:h-3/4  shadow-md rounded-xl py-3 px-4 xl:px-6 mt-4 bg-white backdrop-filter backdrop-blur-md bg-opacity-10 flex flex-col items-center opacity-0"
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <span className="text-2xl xl:text-6xl text-transparent pt-3 xl:pt-12 bg-cl bg-gradient-to-r from-blue-300 via-teal-500 to-green-500 bg-clip-text m-1">
              Striving for a sustainble tomorrow
            </span>

            <span className="xl:text-xl m-1 xl:mx-56 text-white mt-6 xl:mt-20 text-left">
              Wether flying on an airplane or riding an Uber, Paradropp helps
              you reduce your carbon footprint wherever you travel. By Choosing
              Paradropp you are creating awareness on becoming climate
              conscious.
            </span>

            <span className="xl:text-xl m-1 xl:mx-56 text-white mt-4 xl:mt-14 text-left">
              Climate change is already showing signs of being a treat to both
              our planet and civilization. Without taking the right descisions,
              we are endangering future generations. The biggest ways to reduce
              our footrints are by utilizing green energy for autombiles and
              reduction in production of green house casuing agents.
            </span>

            <span className=" xl:text-3xl font-semibold text-transparent pt-4 xl:pt-12 bg-cl bg-gradient-to-r from-blue-300 via-teal-500 to-green-500 bg-clip-text m-1 mb-2">
              JOIN US
            </span>
          </motion.div>
        </div>

        <div
          className="bg-subtitle-bg bg-no-repeat bg-center bg-cover flex flex-col xl:flex-row"
          style={{ minHeight: "100vh" }}
        >
          <div className="xl:hidden mb-8">
            <ListHeader />
          </div>

          <div className="flex xl:flex-1 flex-col justify-center items-center xl:items-end xl:mr-10">
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
          <div className="hidden xl:inline mb-5">
            <ListHeader />
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

function ListHeader() {
  return (
    <div className="flex xl:flex-1 flex-col justify-start items-center xl:items-start mr-2 xl:mr-10">
      <p className="text-white font-bold text-3xl mt-20 xl:mt-60 ml-10 xl:ml-20">
        We take care of all your travel hassles
      </p>
      <p className="text-white font-bold text-4xl mt-4 xl:mt-4 ml-10 xl:ml-20">
        So you can peacfully take the vacation, while
      </p>
      <p className="text-white font-bold text-5xl mt-4 xl:mt-4 ml-10 xl:ml-20">
        Relaxing and Enjoying.
      </p>
    </div>
  );
}

function Header() {
  return (
    <>
      <p className=" text-4xl xl:text-6xl text-left font-extrabold text-white mb-3 xl:mb-2">
        Open Tooling and Platform
      </p>
      <p className="text-2xl xl:text-4xl text-left font-bold text-white">
        for a sustainable tomorrow.
      </p>

      <div className="mt-5 xl:mt-4 xl:flex xl:flex-col ">
        {/* <p
          className="hidden xl:inline-block text-left text-black"
          style={{ fontSize: "18px" }}
        >
          Choose green mobility over an Uber while travelling and get rewards in
        </p>
        <p
          className="xl:hidden text-left text-gray-300 "
          style={{ fontSize: "18px" }}
        >
          Choose green mobility over an Uber while travelling and get rewards in
          stable coins while creating a greater impact to help fight climate
          change.
        </p> */}

        {/* <p
          className="hidden xl:inline-block text-left text-gray-300"
          style={{ fontSize: "18px" }}
        >
          stable coins while creating a greater impact to help fight climate
          change.
        </p> */}
      </div>
    </>
  );
}

function Caption() {
  return (
    <p className="text-center text-white font-semibold text-2xl xl:text-4xl">
      Stay Notified
    </p>
  );
}
