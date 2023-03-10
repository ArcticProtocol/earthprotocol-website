import { Card } from "../../Components/Card/Card";
import Lottie from "react-lottie";
import cycleData from "../../Components/Icons/Lotties/bike.json";
import { Lock } from "../../Components/Icons/Icons";
import { useRouter } from "next/router";
import Button from "../../Components/Button/Button";

export default function Travel() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="border-none flex justify-center items-center p-5 m-2 mb-10 mt-8">
        <span className=" text-3xl bold bg-gradient-to-r from-blue-300 via-teal-500 to-green-500 bg-clip-text text-transparent text-center">
          Complete your trip to earn exciting rewards!
        </span>
      </div>
      <div>
        <div className="flex flex-col items-center relative justify-center mx-2 my-2">
          <div className="w-full ">
            <Card />
          </div>
          <div className="flex flex-col justify-center w-full h-full absolute items-center shadow-md py-2 backdrop-filter backdrop-blur-sm bg-white bg-opacity-10 rounded-xl m-4 z-10">
            <Lock />
          </div>
        </div>
      </div>
      <span className="mt-6 text-white text-xl mx-10 text-center">
        You can claim your reward once you end trip.
      </span>

      <div className="mt-10">
        <Lottie options={{ animationData: cycleData }} height={180} />
        <div className="border-none flex justify-center items-center bg-black p-4 m-1 ">
          <Button
            buttonStyle="w-3/4 xl:w-1/2 bg-opacity-20 text-white rounded-md h-14 self-bottom font-semibold bg-gradient-to-r from-red-400 to-red-500 hover:animate-flow"
            onClick={() => {
              router.push("/rewards");
            }}
            textStyle="text-white font-semibold text-lg"
            text="End Trip"
          />
        </div>
      </div>
    </div>
  );
}
