import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="top-0 z-50 fixed w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25">
      <div className="h-20 flex justify-center xl:justify-evenly  pl-44 pr-44">
        <div className="flex-1 flex items-center justify-center xl:justify-start">
          <h2 className="text-4xl font-bold text-white">The Earth Protocol</h2>
        </div>

        <div className="hidden xl:flex-1 xl:flex xl:items-center justify-end">
          <NavBarItem text="About" />
          <NavBarItem text="Github" />
          <NavBarItem text="Discord" />
        </div>
      </div>
    </div>
  );
}
