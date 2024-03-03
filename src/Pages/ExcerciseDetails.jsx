import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BodyPartImage from "../Assets/images/bodypart.png";
import EquipmentImage from "../Assets/images/equipment.png";
import TargetImage from "../Assets/images/target.png";

function ExcerciseDetails() {
  const [excerciseDetail, setExcerciseDetail] = useState({});
  const { id } = useParams();

  const { equipment, gifUrl, name, target, bodyPart } = excerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  useEffect(() => {
    const fetchExcerciseData = async () => {
      const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setExcerciseDetail(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExcerciseData();
  }, [id]);
  return (
    <div className="lg:flex w-full mt-5">
      <img src={gifUrl} alt={name} loading="lazy" className="w-4/5 pl-9" />

      <div className="pt-12 pl-3">
        <h6 className="text-4xl bold uppercase">{name}</h6>
        <p className="text-lg pt-4">
          Excercises keep you strong. {name} is one of the best excercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </p>

        {extraDetail.map((item) => (
          <div key={item.icon} className=" items-center flex p-6 gap-8">
            <button className="rounded-2xl p-3 bg-orange-100	">
              {" "}
              <img src={item.icon} alt={bodyPart} className="w-14" />
            </button>

            <p className="capitalize">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExcerciseDetails;
