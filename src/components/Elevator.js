import { useEffect } from "react";

export default function Elevator() {
  useEffect(() => {
    const elevator = document.getElementById("elevator");
    elevator.style.marginBottom = "30vh";
  }, []);

  return (
    <div className="w-1/3 flex">
      <div className="w-5/6">
        <div
          style={{ height: "10vh" }}
          className="flex justify-center items-center text-3xl uppercase text-gray-400"
        >
          Floor 9
        </div>
        <div
          style={{ height: "10vh" }}
          className="flex justify-center items-center text-3xl uppercase text-gray-400"
        >
          Floor 8
        </div>
        <div
          style={{ height: "10vh" }}
          className="flex justify-center items-center text-3xl uppercase text-gray-400"
        >
          Floor 7
        </div>
        <div
          style={{ height: "10vh" }}
          className="flex justify-center items-center text-3xl uppercase text-gray-400"
        >
          Floor 6
        </div>
        <div
          style={{ height: "10vh" }}
          className="flex justify-center items-center text-3xl uppercase text-gray-400"
        >
          Floor 5
        </div>
        <div
          style={{ height: "10vh" }}
          className="flex justify-center items-center text-3xl uppercase text-gray-400"
        >
          Floor 4
        </div>
        <div
          style={{ height: "10vh" }}
          className="flex justify-center items-center text-3xl uppercase text-gray-400"
        >
          Floor 3
        </div>
        <div
          style={{ height: "10vh" }}
          className="flex justify-center items-center text-3xl uppercase text-gray-400"
        >
          Floor 2
        </div>
        <div
          style={{ height: "10vh" }}
          className="flex justify-center items-center text-3xl uppercase text-gray-400"
        >
          Floor 1
        </div>
        <div
          style={{ height: "10vh" }}
          className="flex justify-center items-center text-3xl uppercase text-gray-400"
        >
          Floor 0
        </div>
      </div>
      <div className="w-1/6 bg-gray-900 px-2 flex flex-col justify-end">
        <div
          id="elevator"
          style={{ height: "10vh" }}
          className="rounded bg-gray-300 duration-500 ease-linear"
        ></div>
      </div>
    </div>
  );
}
