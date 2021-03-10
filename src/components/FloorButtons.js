export default function FloorButtons() {
  return (
    <div className="h-1/4 border-b border-gray-700 flex justify-around items-center">
      <select className="text-black text-4xl rounded">
        <option value="0">Floor 0</option>
        <option value="1">Floor 1</option>
        <option value="2">Floor 2</option>
        <option value="3">Floor 3</option>
        <option value="4">Floor 4</option>
        <option value="5">Floor 5</option>
        <option value="6">Floor 6</option>
        <option value="7">Floor 7</option>
        <option value="8">Floor 8</option>
        <option value="9">Floor 9</option>
      </select>
      <div className="flex">
        <button className="rounded-full h-24 w-24 border-4 border-white flex justify-center items-center mr-16">
          <i style={{ fontSize: "3rem" }} className="im im-care-up mb-2"></i>
        </button>
        <button className="rounded-full h-24 w-24 border-4 border-white flex justify-center items-center">
          <i style={{ fontSize: "3rem" }} className="im im-care-down mt-2"></i>
        </button>
      </div>
    </div>
  );
}
