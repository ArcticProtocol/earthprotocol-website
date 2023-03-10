import TextField from "../TextField/TextField";

export default function Footer() {
  return (
    <div className="bg-black px-10 xl:px-80 my-12">
      <div className="flex flex-col xl:flex-row items-center xl:justify-between">
        <div className="flex flex-col items-start">
          <span className="text-white text-2xl font-bold m-1">
            The Earth Protocol
          </span>
          <span className=  "text-gray-300 text-lg mx-1">
            Open tooling for a sustainable tomorrow
          </span>

          <span className="hidden xl:inline  text-gray-300 text-md mt-14 mx-1">
            © 2023 | All Rights Reserved
          </span>
        </div>

        <div className="flex mt-10 xl:mt-2 flex-col items-start">
          <span className="text-white text-xl font-semibold m-1 ">About</span>
          <span className="text-white text-xl font-semibold m-1 ">Blog</span>
          <span className="text-white text-xl font-semibold m-1">FAQ</span>
          <span className="text-white text-lg font-bold m-1 mt-4">
            Sign Up for updates
          </span>

          <TextField type="email" placeholder="Email" width="" />

          <span className="xl:hidden text-gray-300 text-md mt-14 mx-1">
            © 2023 | All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
}
