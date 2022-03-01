import { createContext, useEffect, useState } from "react";
import { quizRequest } from "./questions.service";

export const QuestionsContext = createContext();

export const QuestionsContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  const retieveQuestions = () => {
    quizRequest()
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
    <QuestionsContext.Provider value={{ questions }}>
      {children}
    </QuestionsContext.Provider>
  );
};
