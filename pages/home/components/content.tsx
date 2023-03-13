function Caption() {
  return (
    <p className="text-center text-white font-semibold text-2xl xl:text-4xl">
      Stay Notified
    </p>
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

function JubotronMission() {
  return (
    <>
      <span className="text-2xl xl:text-6xl text-center pb-2 text-transparent pt-3 xl:pt-12 bg-cl bg-gradient-to-r from-blue-300 via-teal-500 to-green-500 bg-clip-text m-1">
        Climate Change is here, and we&apos;re
      </span>
      <span className="text-2xl xl:text-6xl text-center pb-2 text-transparent bg-cl bg-gradient-to-r from-blue-300 via-teal-500 to-green-500 bg-clip-text m-1">
        pioneering tools for a sustainable tomorrow.
      </span>

      <span className="xl:text-xl m-1 xl:mx-56 text-white mt-4 xl:mt-14 text-justify">
        Climate change is already showing signs of being a treat to both our
        planet and civilization. Without taking the right descisions, we are
        endangering future generations. We don&apos;t own the planet, we have to make
        efforts to save it. Without the right tools, technology, research, and
        incentive, it would be hard to accomplish the goal of accomplishing
        net-zero emissions in the coming decades.
      </span>

      <span className="xl:text-xl m-2 xl:mx-56 text-white mt-1 xl:mt-1 text-justify">
        We&apos;re building an open platform for individuals, organizations and
        governments to utilize tools and products to improve their pathway to
        reducing their carbon footprint and achieving sustainability goals. We
        are optimistic about the goals and have an exciting roadmap ahead. With
        adequete support, we are sure to have great largescale impact to solve
        the climate crisis.
      </span>
    </>
  );
}

export { Caption, Header, ListHeader, JubotronMission };
