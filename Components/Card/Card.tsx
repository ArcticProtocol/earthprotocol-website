export function Card() {
  return (
    <div className="flex flex-col justify-center items-center shadow-md p-2 backdrop-filter backdrop-blur-md bg-white bg-opacity-10 rounded-xl">
      <img
        className="inline object-cover w-36 h-36 mr-2 rounded-full"
        src="https://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB.jpg"
        alt="Profile image"
      />
      <div className="flex flex-col px-10 mt-9">
        <span className="text-white text-2xl font-semibold mb-1">
          30% off from McDonald's
        </span>
        <span className="text-white text-xl opacity-90 font-semibold">valid till 30th May</span>
      </div>
    </div>
  );
}
