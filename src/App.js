import "./App.css";
import Controls from "./components/Controls";
import Elevator from "./components/Elevator";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-600 text-white flex">
      <Controls />
      <Elevator />
      <span className="absolute p-3 text-2xl italic text-gray-400">
        elevate
      </span>
    </div>
  );
}

export default App;
