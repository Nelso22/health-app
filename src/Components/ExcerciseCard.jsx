import { useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "../FormContext";

const ExcerciseCard = () => {
  const { list } = useContext(FormContext);
  console.log(list);

  return (
    <div className="container max-w-6xl m-auto grid grid-cols-2 place-items-center	">
      {list.map((excercise) => (
        <Link
          key={excercise.id}
          className="w-5/6 border-y-2 border-y-amber-600 pl-6 pb-5"
          to={`/excercise/${excercise.id}`}
        >
          <img
            src={excercise.gifUrl}
            alt={excercise.name}
            loading="lazy"
            key={excercise.id}
            className=""
          />

          <div className="flex gap-4">
            <button className="text-white bg-pink-300 rounded-3xl p-2 px-3 capitalize">
              {excercise.bodyPart}
            </button>
            <button className="text-white bg-yellow-400 rounded-3xl p-2 px-3 capitalize">
              {excercise.target}
            </button>
          </div>

          <p className="bold text-lg pt-3 capitalize">{excercise.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default ExcerciseCard;
