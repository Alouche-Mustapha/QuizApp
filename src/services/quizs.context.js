import { createContext, useEffect, useState } from "react";
import { quizsRequest, quizsTransform } from "./quizs.service";

export const QuizsContext = createContext();

export const QuizsContextProvider = ({ children }) => {
  const [quizs, setQuizs] = useState([]);

  const retieveQuizs = () => {
    quizsRequest()
      .then(quizsTransform)
      .then((quizs) => {
        setQuizs(quizs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    retieveQuizs();
  }, []);

  return (
    <QuizsContext.Provider value={{ quizs }}>{children}</QuizsContext.Provider>
  );
};
