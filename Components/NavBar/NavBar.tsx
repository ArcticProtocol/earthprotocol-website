import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="h-20 bg-green-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 flex justify-center xl:justify-evenly pl-44 pr-44">
      <div className="flex-1 flex items-center justify-center xl:justify-start">
        <h2 className="text-4xl font-bold text-white">The Earth Protocol</h2>
      </div>

      <div className="hidden xl:flex-1 xl:flex xl:items-center justify-end">
        <NavBarItem text="About" />
        <NavBarItem text="WhitePaper" />
        <NavBarItem text="Try Now" />
      </div>
    </div>
  );
}
