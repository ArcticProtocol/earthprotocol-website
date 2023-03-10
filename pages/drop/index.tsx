import { Card } from "../../Components/Card/Card";

export default function Drop() {
  return (
    <div className=" m-10 flex flex-col justify-center items-center">
      <span>You have arrived</span>
      <span> ParaDropping your Reward!</span>

      <div className="pb-10"></div>

      <img
        src="https://freepikpsd.com/file/2019/10/rewards-icon-png-1-Transparent-Images.png"
        alt=""
        width={100}
      />

      <div className="pb-20"></div>

      <Card />
    </div>
  );
}
