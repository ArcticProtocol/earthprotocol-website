import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import Button from "../../Components/Button/Button";
import {
  QRCode,
  Destination,
  Reward,
  Bike,
  System,
  Arrow,
  Mobile,
} from "../../Components/Icons/Icons";
import AnimateIcon from "../../Components/Icons/AnimateIcon";

export default function Scan(props: any) {
  const [qrCodeData, setqrCodeData] = useState(null);
  const [instrcutionModal, setInstructionModal] = useState(false);

  useEffect(() => {
    const init = () => {
      setInstructionModal(true);
    };

    init();
  }, []);

  return (
    <>
      <div className="hidden xl:flex flex-col items-center">
        <div className="flex flex-col items-center justify-center shadow-md py-10 px-10 backdrop-filter backdrop-blur-md bg-white bg-opacity-20 rounded-xl m-4 mt-48">
          <p className="text-4xl text-white font-bold text-center mb-5">
            Sorry, Paradropp only works on a phone
          </p>
          <p className="text-3xl text-white font-bold mb-7">
            To get the best experience, please continue on a smartphone
          </p>
          <div className="flex flex-row justify-center items-center mb-7">
            <System />
            <Arrow />
            <Mobile />
          </div>
        </div>
      </div>

      <div className="flex xl:hidden">
        {instrcutionModal && (
          <InstructionModal closeModal={(val) => setInstructionModal(val)} />
        )}

        <div className="m-10 w-3/4 flex flex-col justify-center items-center absolute">
          <p className="text-2xl font-bold  my-2 bg-gradient-to-r from-blue-300 via-teal-500 to-green-500 bg-clip-text text-transparent">
            Scan the QR code of a bike
          </p>
          <p className="text-2xl font-bold  my-2 bg-gradient-to-r from-blue-300 via-teal-500 to-green-500 bg-clip-text text-transparent">
            to get started
          </p>

          <QrReader
            key="environmentQR"
            onResult={(result: any, error) => {
              if (!!result) {
                setqrCodeData(result?.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            constraints={{
              facingMode: "environment",
            }}
            //@ts-ignore
            // style={{ width: "70%" }}
            className="border-2 w-full rounded-2xl m-8"
          />

          {!qrCodeData && (
            <p className="text-xl text-gray-300 my-4">
              Scanning will start automatically
            </p>
          )}

          {qrCodeData && (
            <p className="text-xl text-white my-4">Scan Successful</p>
          )}

          <p className="text-white">{qrCodeData}</p>

          {qrCodeData && (
            <Button
              onClick={() => {}}
              text="Continue to Lyft"
              textStyle="text-white text-xl"
              buttonStyle="w-3/4 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 h-16 my-4 rounded-lg"
            />
          )}
        </div>
      </div>
    </>
  );
}

type InstructionModalProps = {
  closeModal: (value: React.SetStateAction<boolean>) => void;
};

function InstructionModal(props: InstructionModalProps) {
  return (
    <div className="flex flex-col items-center justify-start shadow-md py-6 backdrop-filter backdrop-blur-md bg-white bg-opacity-20 rounded-xl m-4 z-10 h-full">
      <span className="text-4xl m-4 font-extrabold text-white">
        How it works
      </span>
      <div className=" flex flex-col items-center justify-start px-4 text-center">
        <AnimateIcon children={<QRCode />} />

        <span className="text-l text-white">
          Scan a bike code at the nearest bike station
        </span>

        <AnimateIcon children={<Bike />} />

        <span className="text-l text-white">
          Reduce your carbon footprint by choosing a greener transport mode
        </span>

        <AnimateIcon children={<Destination />} />
        <span className="text-l text-white">
          Make sure to 'End Trip' to confirm your destination
        </span>

        <AnimateIcon children={<Reward />} />
        <span className="text-l text-white">
          Earn exiciting coupons and rewards from your favourite brands
        </span>
      </div>
      <Button
        onClick={() => props.closeModal(false)}
        text="Got It!"
        textStyle="text-white text-xl"
        buttonStyle="w-3/4 h-14 mt-8 bg-gradient-to-r from-blue-300 via-teal-500 to-green-500 rounded-lg"
      />
    </div>
  );
}
