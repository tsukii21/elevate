import Display from "./Display";
import FloorButtons from "./FloorButtons";
import ElevatorButtons from "./ElevatorButtons";

export default function Controls() {
  return (
    <div className="w-2/3 border-r border-gray-700">
      <Display />
      <FloorButtons />
      <ElevatorButtons />
    </div>
  );
}
