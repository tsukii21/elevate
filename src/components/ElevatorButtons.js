import FloorButton from "./FloorButton";

export default function ElevatorButtons() {
  return (
    <div className="h-2/4 flex">
      <div className="w-2/3 flex flex-wrap justify-center">
        <FloorButton number={9} />
        <FloorButton number={8} />
        <FloorButton number={7} />
        <FloorButton number={6} />
        <FloorButton number={5} />
        <FloorButton number={4} />
        <FloorButton number={3} />
        <FloorButton number={2} />
        <FloorButton number={1} />
        <FloorButton number={0} />
      </div>
      <div className="w-1/3 flex flex-col justify-around items-end pr-5">
        <button className="text-5xl flex items-center border-4 border-white p-4 rounded-xl">
          <i style={{ fontSize: "3rem" }} className="im im-care-left"></i>
          <i style={{ fontSize: "3rem" }} className="im im-care-right mr-2"></i>
          OPEN
        </button>
        <button className="text-5xl flex items-center border-4 border-white p-4 rounded-xl">
          <i style={{ fontSize: "3rem" }} className="im im-care-right"></i>
          <i style={{ fontSize: "3rem" }} className="im im-care-left mr-2"></i>
          CLOSE
        </button>
        <button className="text-5xl flex items-center border-4 border-white p-4 rounded-xl">
          <i style={{ fontSize: "3rem" }} class="im im-warning mr-2"></i>
          EMERGENCY
        </button>
      </div>
    </div>
  );
}
