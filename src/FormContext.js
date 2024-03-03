import { createContext, useEffect, useState } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [bodyPart, setBodyPart] = useState("");
  const [list, setList] = useState([]); // list of parts
  const [parts, setParts] = useState([]); // search feature //

  const onChange = (e) => {
    setBodyPart(e.target.value);
  };

  useEffect(() => {
    const fetchExcerciseData = async () => {
      const url = "https://exercisedb.p.rapidapi.com/exercises?limit=10";
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
        setList(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExcerciseData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!parts.includes(bodyPart.toLowerCase())) {
      setBodyPart("");
      return;
    }
    setBodyPart(e.target.value);

    const searchUrl = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10`;
    const searchOptions = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${process.env.REACT_APP_RAPIDAPI_KEY}`,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(searchUrl, searchOptions);
      const result = await response.json();
      setList(result);
    } catch (error) {
      console.error(error);
    }
    setBodyPart("");
  };

  return (
    <FormContext.Provider
      value={{ bodyPart, onChange, handleSubmit, list, parts, setParts }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContext;
