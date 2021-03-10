export default function FloorButton(props) {
  const { number } = props;
  return (
    <button className="rounded-full text-6xl h-24 w-24 border-4 border-white flex justify-center items-center my-2 mx-6">
      {number}
    </button>
  );
}
