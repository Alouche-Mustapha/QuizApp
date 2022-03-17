import { createContext, useEffect, useState } from "react";
import { quizRequest, quizTransform } from "./questions.service";

export const QuestionsContext = createContext();

export const QuestionsContextProvider = ({ children }) => {
  const [quizs, setQuestions] = useState([]);

  const retieveQuestions = () => {
    quizRequest()
      .then(quizTransform)
      .then((questions) => {
        setQuestions(questions);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    retieveQuestions();
  }, []);

  return (
    <QuestionsContext.Provider value={{ quizs }}>
      {children}
    </QuestionsContext.Provider>
  );
};
